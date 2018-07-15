import os

from django.shortcuts import render

# Create your views here.
from rest_framework.decorators import api_view
from rest_framework.request import Request
from rest_framework.response import Response
from .prediction import nb_model


@api_view(http_method_names=['GET'])
def predict_heart_disease(request: Request):
    arg = request.query_params['patient']
    result = nb_model.predict([eval(arg)])
    return Response({"predictionResult": result[0]})