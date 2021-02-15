from channels.generic.websocket import WebsocketConsumer
import json
from .models import Sessions,PseudoUser
from threading import Timer
from asgiref.sync import async_to_sync

class JConsumer(WebsocketConsumer):
    def Ttimer(self,time,obj):
        self.send(str(time-1),obj)
        obj.Timer=str(time-1)
        obj.save()
        t=Timer(1.0, self.Ttimer,[time-1,obj])
        t.start()
        if time-1 == 0:
            t.cancel()
            obj.Connect=False
           # obj.quest_played=str(int(obj.quest_played)+1)
            obj.save()
            self.send("[close]4001")
            self.OSHIBKA()

    def connect(self): 
        token = self.scope['url_route']['kwargs']['token']
        async_to_sync(self.channel_layer.group_add)(token,self.channel_name)
        q=Sessions.objects.get(token=token)
        self.Session=q
        print(token)
        #поиск сессии по токену
        # for по коллекции сессий до нахождения соответсвующего токена
        #если нашли такую сессию - принимает подключение
        #если нет - шлем отсюда нафиг
        if q:
            self.accept()
            self.session=q
            q.Connect=True
            q.save()
            itime=int(q.Timer)
            self.Ttimer(25,q)#itime,q)
       
            

    def disconnect(self,token, close_code):
        async_to_sync(self.channel_layer.group_discard)(token,self.channel_name)
        print(close_code)
        print(token)

    def receive(self, text_data):
        print(text_data)
        q=self.Session
        if q.Answer==text_data:
            switch_case={
            'findCountry':10,
            'findByCapital':20,
            'findByObjectOrEvent':35
             }
            Reward=0
            Reward=switch_case[q.questtype]
            user=PseudoUser.objects.get(username=q.username)
            user.raiting=str(int(user.raiting)+Reward)
            user.quest_played=str(int(user.quest_played)+1)
            user.quest_complited=str(int(user.quest_complited)+1)
            user.save()
            q.delete()
            self.send("[close]4000")
            self.OSHIBKA()
            
        else:
            user=PseudoUser.objects.get(username=q.username)
            user.quest_played=str(int(user.quest_played)+1)
            user.save()
            q.delete()
            self.send("[close]4001")
            self.OSHIBKA()


