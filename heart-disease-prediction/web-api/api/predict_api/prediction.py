import sys

import pandas as pd
import os
from sklearn.model_selection import train_test_split

df = pd.read_csv("./data/processed.cleveland.data")

feature_columns = ['age', 'sex', 'chest_pain', 'blood_press', 'chol',
                   'sugar_gt_120mgpdl', 'restecg', 'thalach', 'exang',
                   'oldpeak', 'slope', 'cal', 'thal']
predict_column = ['num']

X = df[feature_columns].values     # predictor feature columns (8 X m)
y = df[predict_column].values # predicted class (1=true, 0=false) column (1 X m)
split_test_size = 0.30

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=split_test_size, random_state=42)

from sklearn.naive_bayes import GaussianNB
# create Gaussian Naive Bayes model object and train it with the data
nb_model = GaussianNB()

nb_model.fit(X_train, y_train.ravel())

# predict values using the training data
nb_predict_train = nb_model.predict(X_train)

# import the performance metrics library
from sklearn import metrics

# Accuracy
# print("Accuracy: {0:.4f}".format(metrics.accuracy_score(y_train, nb_predict_train)))
# print()

# predict values using the testing data
nb_predict_test = nb_model.predict(X_test)

from sklearn import metrics

# training metrics
# print("Accuracy: {0:.4f}".format(metrics.accuracy_score(y_test, nb_predict_test)))
# if sys.argv[1]:
#     print(nb_model.predict([eval(sys.argv[1])]))
