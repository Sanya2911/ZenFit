
import streamlit as st
import pandas as pd
import numpy as np

# from pydataset import data
from streamlit_extras.no_default_selectbox import selectbox
import matplotlib.pyplot as plt

st.title("Nutrition")

st.title('Nutrition Calorie Tracker')
df = pd.read_csv("food.csv", encoding='mac-roman')
ye = st.number_input('Enter Number of dishes', min_value=1, max_value=10)
i = 0
j = 0
calories = 0
list1 = []
list2 = []

try:
    while (i < ye):
        st.write("--------------------")
        sel = selectbox('Select the food ', df['Food'].unique(), no_selection_label=" ", key=i)
        list1.append(sel)
        sel_serving = st.number_input('Select the number of servings ', min_value=1, max_value=10, value=1, step=1,
                                        key=j + 100)
        # list2.append(sel_serving)
        i = i + 1
        j = j + 1
        st.write("Food : ", sel)
        st.write("Serving : ", sel_serving)
        st.write("Calories per serving : ", df[df['Food'] == sel]['Calories'].values[0])
        cal = df[df['Food'] == sel]['Calories'].values[0] * sel_serving
        list2.append(cal)
        st.write("Total calories for ", sel_serving, "servings of ", sel, "= ", cal, "Calories ")

        calories += cal
    st.write("--------------------")

    st.write("Total Calories:", calories)
    


except:
    st.write("")
