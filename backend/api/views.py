from django.shortcuts import render
from rest_framework.views import APIView
from .serializers import StockPredictionSerializer
from rest_framework import status
from rest_framework.response import Response
import os
from django.conf import settings
from .util import save_plot
from sklearn.preprocessing import MinMaxScaler
from keras.models import load_model

import yfinance as yf
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from datetime import datetime

from sklearn.metrics import mean_squared_error,r2_score
# Create your views here.

class StockPredictionsAPIView(APIView):
    def post(self,request):
        serializer=StockPredictionSerializer(data=request.data) 
        if serializer.is_valid():
            ticker=serializer.validated_data['ticker']
        #     return Response(serializer.data, status=status.HTTP_201_CREATED)
        # return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        now=datetime.now()
        start=datetime(now.year-10,now.month,now.day)
        end=now
        df=yf.download(ticker,start,end)
        if df.empty:
            return Response(
                {"Error": "Invalid ticker", 
                "status":status.HTTP_404_NOT_FOUND})
        plt.switch_backend('AGG')
        df=df.reset_index()
        plt.figure(figsize=(12,5))
        plt.plot(df.Close,label='Closing Price')
        plt.title(f'Closing Price of {ticker} ')
        plt.xlabel('Days')
        plt.ylabel('Closing Price')
        plt.legend()
        plot_img_path=f'{ticker}_plot.png'
        plot_img=save_plot(plot_img_path)
        
        #100 Days Avg
        ma100=df.Close.rolling(100).mean()
        plt.switch_backend('AGG')
        plt.figure(figsize=(12,5))
        plt.plot(df.Close)
        plt.plot(ma100,'r')
        plt.title('100 Days Moving Avg')
        plt.xlabel('Days')
        plt.ylabel('Price')
        plot_img_path=f'{ticker}_100_dma.png'
        plot_100_dma=save_plot(plot_img_path)

        ma200=df.Close.rolling(200).mean()
        plt.switch_backend('AGG')
        plt.figure(figsize=(12,5))
        plt.plot(df.Close)
        plt.plot(ma200,'g')
        plt.title('200 Days Moving Avg')
        plt.xlabel('Days')
        plt.ylabel('Price')
        plot_img_path=f'{ticker}_200_dma.png'
        plot_200_dma=save_plot(plot_img_path)
        
        data_training=pd.DataFrame(df.Close[0:int(len(df)*0.7)])
        data_testing=pd.DataFrame(df.Close[int(len(df)*0.7):int(len(df))])

        scaler=MinMaxScaler(feature_range=(0,1))

        model=load_model('Stock_prediction_model.keras')



        past_100_days=data_training.tail(100)
        final_df=pd.concat([past_100_days,data_testing],ignore_index=True)
        input_data=scaler.fit_transform(final_df)
                
        x_test=[]
        y_test=[]

        for i in range (100,input_data.shape[0]):
            x_test.append(input_data[i-100:i])
            y_test.append(input_data[i,0])

        x_test,y_test=np.array(x_test),np.array(y_test)

        y_predicted=model.predict(x_test)
        y_predicted=scaler.inverse_transform(y_predicted.reshape(-1,1)).flatten()
        y_test=scaler.inverse_transform(y_test.reshape(-1,1)).flatten()

        plt.switch_backend('AGG')
        plt.figure(figsize=(12,5))
        plt.plot(y_test,'b',label='Original Price')
        plt.plot(y_predicted,'r',label='Predicted Price')
        plt.title(f'Final Prediction for {ticker} ')
        plt.xlabel('Days')
        plt.ylabel('Price')
        plot_img_path=f'{ticker}_final_prediction.png'
        plot_fianl=save_plot(plot_img_path)
        
                
        mse=mean_squared_error(y_test,y_predicted)
        rmse=np.sqrt(mse)
        r2=r2_score(y_test,y_predicted)

        return Response({'status':'success',
                          'plot_img':plot_img,
                          'plot_100_dma':plot_100_dma,
                          'plot_200_dma':plot_200_dma,
                          'plot_final':plot_fianl,
                          'mse':mse,
                          'rmse':rmse,
                          'r2':r2
                          })