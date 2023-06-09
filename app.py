from fastapi import FastAPI
from tensorflow import keras
import numpy as np
import pandas as pd
from pydantic import BaseModel
from model import ingredient


app = FastAPI()

# 모델 파일 경로
MODEL_FILE_PATH = "aa.h5"


model = keras.models.load_model(MODEL_FILE_PATH)
data = pd.read_excel("./재료2.xlsx")


@app.post("/predict")
async def predict(input_data: dict):
    # 모델 예측
    print(input_data)
    try:
        df = pd.DataFrame(columns=data.columns)
        df = pd.concat([df, pd.DataFrame([input_data])], ignore_index=True)
        df.fillna(0, inplace=True)
        df = df.iloc[:, 2:]
        print(df)
        df1 = df.values
        df2 = df1.astype(float)
        predictions = model.predict(df2)
        result = np.argmax(predictions)

        res = data.loc[data["요리타겟"] == result]["요리"].unique()
    except Exception as e:  # 예외 처리
        print("에러 발생:", e)
    print(res)
    # 예측 결과 반환
    return res[0]
