# chat/routing.py
from django.urls import re_path

from . import consumers

websocket_urlpatterns = [
    re_path(r'ws/(?P<token>\w+)', consumers.JConsumer),
]
#channel_routing=[
#    route("websocket.receive", websocket_receive,path=r"^/sockets/chat/"), 
#]ws/(?P<token>\w+)
