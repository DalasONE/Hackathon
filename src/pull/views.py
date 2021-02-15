from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
import json
from django.contrib.auth.models import User
import re
from .models import PseudoUser,User_contact,Country,Sessions,Events
from django.http import JsonResponse
import random
import string
import datetime
# Create your views here.
@csrf_exempt
def randomString(stringLength=10):
    """Generate a random string of fixed length """
    letters = string.ascii_lowercase
    return ''.join(random.choice(letters) for i in range(stringLength))


@csrf_exempt
def app(request):
    return render(request,'pull/app.html')
@csrf_exempt
def auth(request):
    return render(request,'pull/auth.html')
@csrf_exempt
def intro(request):
    return render(request,'pull/intro.html')
def help(request):
    return render(request,'pull/help.html')

@csrf_exempt
def GetUser(request):
    body_unicode=request.body.decode('utf-8')
    body=json.loads(body_unicode)
    LoE=body['loginOrEmail']
    password=body['password']
    q=PseudoUser.objects.all()
    if PseudoUser.objects.filter(email=LoE):
        q=PseudoUser.objects.get(email=LoE)
    else:
        q=PseudoUser.objects.get(username=LoE)
    response_data={}
    response_data["userName"]=q.username
    response_data["userScore"]=q.raiting
    response_data["questPlayed"]=q.quest_played
    response_data["questComplited"]=q.quest_complited
    if q.quest_played!=None:
        response_data["questFailed"]=str(int(q.quest_played)-int(q.quest_complited))
    else:
        response_data["questFailed"]="0"
    response_data["registerDate"]=q.reg_date
    #response_data={"userName":q.username,"userScore":q.raiting,"questPlayed":q.quest_played,"questComplited":q.quest_complited,"questFailed":str(int(q.quest_played)-int(q.quest_complited)),"registerDate":q.reg_date}
    return JsonResponse(response_data)
@csrf_exempt
def check_quest(request):
    return HttpResponse()
@csrf_exempt
def start_quest(request):
    body_unicode=request.body.decode('utf-8')
    body=json.loads(body_unicode)
    LoE=body['loginOrEmail']
    password=body['password']
    QuestType=body['questType']
    Answer=""
    Type=""
    if PseudoUser.objects.filter(email=LoE):
        q=PseudoUser.objects.get(email=LoE)
    else:
        q=PseudoUser.objects.get(username=LoE)
    switch_case={
        'findCountry':"Найди страну:",
        'findByCapital':"Найди столицу:",
        'findByObjectOrEvent':"Найди страну по событию или достопримечатльности:"
    }
    Type=switch_case[QuestType]
    vobj=Country.objects.get(id="USA")
    if Type!="Найди страну по событию или достопримечатльности:":
        VQ=Country.objects.all()
        Rand=datetime.datetime.now().second+datetime.datetime.now().minute
        i=1
        for p in VQ:
            i+=1
            if i==Rand:
                vobj=p
                Answer=p.id
    else:
        VQ=Events.objects.all()
        Rand=random.randint(1,10)
        i=1
        for p in VQ:
            i+=1
            if i==Rand:
                vobj=p
                Answer=p.id
    token=randomString(10)
    Ses=Sessions(username=q.username,questtype=QuestType,token=token,Answer=Answer,Connect=False,Timer="60")
    Ses.save()
    QO=""
    if Type =="Найди страну:":
        QO=vobj.Rname
    elif Type =="Найди столицу:":
        QO=vobj.Capital
    else:
        QO=vobj.Event_name
    QuestObjective=Type+QO
    response_data={}
    response_data["questObjective"]=QuestObjective
    response_data["token"]=token
    response_data["startTime"]="60"
    return JsonResponse(response_data)
# Json array отдать # запрос api/get-contacts-list
@csrf_exempt
def Contacts(request):
    body_unicode=request.body.decode('utf-8')
    body=json.loads(body_unicode)
    LoE=body['loginOrEmail']
    password=body['password']
    q=PseudoUser.objects.all()
    if PseudoUser.objects.filter(email=LoE):
        q=PseudoUser.objects.get(email=LoE)
    else:
        q=PseudoUser.objects.get(username=LoE)
    response_data={}
    response_records=[]
    VQ=User_contact.objects.filter(username_owner=q.username)
    for p in VQ:
        record={"name":p.contact_name,"score":p.contact_raiting}
        response_records.append(record)
    response_data['contacts']=response_records
    print(response_data)
    return  JsonResponse(response_data)

@csrf_exempt
def GetContact(request):
    body_unicode=request.body.decode('utf-8')
    body=json.loads(body_unicode)
    print(body)
    LoE=body['loginOrEmail']
    password=body['password']
    contact_name=body['contactName']
    print(contact_name)
    username_owner=""
    if PseudoUser.objects.filter(username=LoE):
        username_owner=PseudoUser.objects.get(username=LoE).username
    else:
        username_owner=PseudoUser.objects.get(email=LoE).username
    contact_raiting="-_-"
    if PseudoUser.objects.filter(username=contact_name):
        contact_raiting=PseudoUser.objects.get(username=contact_name).raiting
    elif PseudoUser.objects.filter(email=contact_name):
        contact_raiting=PseudoUser.objects.get(email=contact_name).raiting
    else:
        resp=HttpResponse()
        resp.status_code=400
        return resp
    q=User_contact(username_owner=username_owner,contact_name=contact_name,contact_raiting=contact_raiting)
    q.save()
    resp=HttpResponse()
    resp.status_code=200
    return resp
@csrf_exempt
def LeaderBoard(request):
    user=request.GET.get('user')
    count=request.GET.get('count')
    if PseudoUser.objects.filter(username=user):
        q=PseudoUser.objects.get(username=user)   
    if PseudoUser.objects.filter(email=user):
        q=PseudoUser.objects.get(email=user) 
    VQ=PseudoUser.objects.raw('SELECT *, ROW_NUMBER() OVER(ORDER BY raiting DESC) num FROM pull_pseudouser')
    number=0
    for p in VQ:
        if p.username==user or  p.email==user:
            number=p.num
    response_data={}
    response_data['user']={"name":q.username,"number":number,"score":q.raiting}
    response_records=[]
    for p in VQ:
        name=p.username
        score=p.raiting
        number=p.num
        record={"name":name,"score":score,"number":number}
        response_records.append(record)
    response_data['leaders']=response_records
    return JsonResponse(response_data)
@csrf_exempt
def StranaR(request):
    Strana=request.GET.get('id')
    q=Country.objects.get(id=Strana)   
    response_data={}
    response_data['name']=q.Rname
    response_data['description']=q.Descrpition
    response_data['capital']=q.Capital
    response_data['wiki']=q.LinkToW
    print(q.LinkToW)     #ap/get-country-info?id=countryId
    #return HttpResponse("LLULULULULULUULULUL")
    return JsonResponse(response_data)
    #return HttpResponse(json.dumps(response_data), content_type="application/json") # name- название на русском # description - описание # captial - столица # wiki - ссылка на вики
@csrf_exempt
def login(request):
    body_unicode=request.body.decode('utf-8')
    body=json.loads(body_unicode)
    resp=HttpResponse()
    answer=""
    LoE=body['loginOrEmail']
    password=body['password']
    print(password)
    q=1
    if not PseudoUser.objects.filter(username=LoE):
        if not PseudoUser.objects.filter(email=LoE):
            resp.status_code=400
            print("ne sovpalo s bazoi")
            answer="Логин/почта не найдены"
        else:
            q=PseudoUser.objects.get(email=LoE)
    else:
        q=PseudoUser.objects.get(username=LoE)
    if q!=1 :
        if q.password==password:
            print(q.password)
            resp.status_code=200
            print("All right")
        else:
            resp.status_code=400
            print("Paroli ne sovpali")
            answer="Пароли не совпадают"
    
    resp.write(answer)
    return resp
@csrf_exempt
def checkAuth(request):
    body_unicode=request.body.decode('utf-8')
    body=json.loads(body_unicode)
    resp=HttpResponse()
    answer=""
    LoE=body['loginOrEmail']
    password=body['password']
    print(password)
    q=1
    if not PseudoUser.objects.filter(username=LoE):
        if not PseudoUser.objects.filter(email=LoE):
            resp.status_code=400
            print("ne sovpalo s bazoi")
            answer="Логин/почта не найдены"
        else:
            q=PseudoUser.objects.get(email=LoE)
    else:
        q=PseudoUser.objects.get(username=LoE)
    if q!=1 :
        if q.password==password:
            print(q.password)
            resp.status_code=200
            print("All right")
        else:
            resp.status_code=400
            print("Paroli ne sovpali")
            answer="Пароли не совпадают"
    
    resp.write(answer)
    return resp
@csrf_exempt
def Authc(request):
    body_unicode=request.body.decode('utf-8')
    body=json.loads(body_unicode)
    email=body['email']
    login=body['login']
    password=body['password']
    resp=HttpResponse()
    answer=""
    regex='^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$'
    if(re.search(regex,email)):
        print('valid email')
    else:  
        resp.status_code=400
        answer="Не валидный email адрес"
        
    if len(login)<3:
        resp.status_code=400
        answer="Неправильная длина логина"
    if len(password)<6:
        resp.status_code=400
        answer="Неправильная длина пароля"
    if resp.status_code!=400:
        user=PseudoUser(username=login,email=email,password=password,raiting="0",reg_date=datetime.datetime.now(),quest_played="0",quest_complited="0")
        user.save()

    
                                                          #200 - ok    #400 ne ok проверка по длине (лог >= 3  pass>=6 email по реджиксу проверка есть ли он в базе )
    
 #   email=request.POST['email']
  #  login=request.POST['login']
  #  password=request.POST['password']
    resp.write(answer)
    return resp
def Getzapros(request):
    return HttpResponse("Get")
