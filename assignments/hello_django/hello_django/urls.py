"""hello_django URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.http import HttpResponse
from django.contrib import admin
from django.urls import path
import math




def rectange_area1(request, width, height):
    response=HttpResponse(f"<h1>Area:{height*width} </h1>")
    return response

def rectange_perimeter1(request, width, height):
    response=HttpResponse(f"<h1>Perimeter:{height*2+width*2} </h1>")
    return response

def circle_area1(request, radius):
    response=HttpResponse(f"<h1>Area: {math.pi*radius*radius}</h1>")
    return response
    
def circle_perimeter1(request, radius):
    response=HttpResponse(f"<h1>Perimeter: {math.pi*2*radius}</h1>")
    return response


def rectange_area(request):
    response=HttpResponse(f"<h1>Area: </h1>")
    print(dir(request))
    return response

def rectange_perimeter(request, width, height):
    response=HttpResponse(f"<h1>Perimeter:{height*2+width*2} </h1>")
    return response

def circle_area(request, radius):
    response=HttpResponse(f"<h1>Area: {math.pi*radius*radius}</h1>")
    return response
    
def circle_perimeter(request, radius):
    response=HttpResponse(f"<h1>Perimeter: {math.pi*2*radius}</h1>")
    return response

urlpatterns = [
    path('admin/', admin.site.urls),
    path('rectangle/area/', rectange_area),
    path('rectangle/perimeter/', rectange_perimeter),
    path('circle/area/', circle_area),
    path('circle/perimeter/', circle_perimeter),

    path('rectangle/area/<int:height>/<int:width>/', rectange_area1),
    path('rectangle/perimeter/<int:height>/<int:width>/', rectange_perimeter1),
    path('circle/area/<int:radius>/', circle_area1),
    path('circle/perimeter/<int:radius>/', circle_perimeter1),
]
