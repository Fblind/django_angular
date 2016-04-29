FROM python:3.5
MAINTAINER Facundo Soria Guerrero <fblind@gmail.com>

RUN pip install Django==1.9 djangorestframework==3.3.3 markdown==2.6.6 django-filter==0.11.0
WORKDIR /backend
COPY backend /backend