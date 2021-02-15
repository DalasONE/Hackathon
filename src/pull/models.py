import datetime
from django.db import models
from django.utils import timezone
# Create your models here.
class Question(models.Model):
    question_text=models.CharField(max_length=200)
    pub_date=models.DateTimeField('data publishied')
    
    def __str__(self):
        return self.question_text

    def was_published_recently(self):
        return self.pub_date>=timezone.now()-datetime.timedelta(days=1)

class Choice(models.Model):
    question=models.ForeignKey(Question,on_delete=models.CASCADE)
    choice_text=models.CharField(max_length=200)
    votes=models.IntegerField(default=0)

    def __str__(self):
        return self.choice_text

class Country(models.Model):
    id=models.CharField(max_length=200,primary_key=True)
    Rname=models.CharField(max_length=200)
    Capital=models.CharField(max_length=200)
    Descrpition=models.CharField(max_length=100000)
    LinkToW=models.CharField(max_length=400)

class PseudoUser(models.Model):
    username=models.CharField(max_length=200,primary_key=True)
    email=models.CharField(max_length=200)
    password=models.CharField(max_length=200)
    raiting=models.CharField(max_length=200)
    reg_date=models.CharField(max_length=200)
    quest_played=models.CharField(max_length=200)
    quest_complited=models.CharField(max_length=200)
class User_contact(models.Model):
    username_owner=models.CharField(max_length=200)
    contact_name=models.CharField(max_length=200)
    contact_raiting=models.CharField(max_length=200)
    id=models.IntegerField(primary_key=True)

class Sessions(models.Model):
    username=models.CharField(max_length=200)
    questtype=models.CharField(max_length=200)
    token=models.CharField(max_length=200,primary_key=True)
    Answer=models.CharField(max_length=200)
    Connect=models.BooleanField()
    Timer=models.CharField(max_length=200)

class Events(models.Model):
    Event_name=models.CharField(max_length=200)
    id=models.CharField(max_length=200,primary_key=True)

# 0 -по странам
# 1 - по сталице
# 2 по обьекту