import csv
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


@api_view(http_method_names=['GET'])
def get_csv(request: Request):
    arr = []
    i = 0
    with open('./data/processed.cleveland.data', 'rt') as csvfile:
        reader = csv.reader(csvfile, delimiter=' ')
        for row in reader:
            if i == 0:
                pass
            else:
                inner_arr = []
                for char in row[0].split(','):
                    inner_arr.append(float(char))

                arr.append(inner_arr)
            i += 1
        csvfile.close()
    return Response({"stats": arr})

