import React, { useState } from 'react'
import { useEffect } from 'react'
import axiosInstance from '../axiosInstance'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { set } from 'mongoose'

const Dashboard = () => {
    const[ticker,setTicker]=useState('')
    const[error,setError]=useState('')
    const accessToken=localStorage.getItem('accessToken')
    const[loading,setLoading]=useState(false)
    const[plot,setPlot]=useState()
    const[ma100,setma100]=useState()
    const[ma200,setma200]=useState()
    const[prediction,setPrediction]=useState()
    const[mse,setMse]=useState()
    const[r2,setR2]=useState()
    const[rmse,setRmse]=useState()
    
    useEffect(()=>{
        const fetchProtectedData= async ()=>{
            try{
                const response = await axiosInstance.get('/protected-view/')
            }
            // set plot
            catch(error){
                console.log('Error Fetching Data :',error)
            }
        }
        fetchProtectedData();
    },[])

    const handleSubmit =async (e) =>{
        e.preventDefault();
        setLoading(true)
        try{
        const response =await axiosInstance.post('/predict/',{
            ticker:ticker
        });
        console.log(response.data)
        const backend_root=import.meta.env.VITE_BACKEND_ROOT
        const plotUrl=`${backend_root}${response.data.plot_img}`
        const ma100Url=`${backend_root}${response.data.plot_100_dma}`
        const ma200Url=`${backend_root}${response.data.plot_200_dma}`
        const predictionUrl=`${backend_root}${response.data.plot_final}`
        const msed=`${backend_root}${response.data.mse}`
        const r2d=`${backend_root}${response.data.r2}`
        const rmsed=`${backend_root}${response.data.rmse}`
        setPlot(plotUrl)
        setma100(ma100Url)
        setma200(ma200Url)
        setPrediction(predictionUrl)
        setMse(response.data.mse)
        setR2(response.data.r2)   
        setRmse(response.data.rmse)
        if (response.data.Error) {
        setError(response.data.Error);
        }
        }
        catch(error){
            console.log('There was an error making the API request',error)
        }
        finally{
            setLoading(false)
        }
    }

  return (
    <>
        <div className="d-flex justify-content-center align-items-center vh-100">
        <form onSubmit={handleSubmit}
            className="p-4 border rounded"
            style={{ minWidth: '300px', backgroundColor: '#fff' }}
        >
            <div className="mb-3">
            <input
                type="text"
                className="form-control"
                placeholder="Enter Stock Ticker"
                onChange={(e) =>setTicker(e.target.value)}
                required
            />
            </div>
            <small>{error && <div className='text-danger'>{error}</div>}</small>
            {loading ? (
              <button type='submit' className='btn btn-info d-block mx-auto mt-2' disabled><FontAwesomeIcon icon={faSpinner} spin></FontAwesomeIcon>Searching in ...</button>
              ):(
              <button type='submit' className='btn btn-info d-block mx-auto mt-2'>Search</button>
              )} 
        </form>
        </div>
        {prediction && (
            <div className='prediction mt-5'>
            <div className='p-5'>
                {plot &&(
                    <img src={plot} style={{maxWidth:'100%'}}/>
                )}
            </div>
            <div className='p-5'>
                {plot &&(
                    <img src={ma100} style={{maxWidth:'100%'}}/>
                )}
            </div>
            <div className='p-5'>
                {plot &&(
                    <img src={ma200} style={{maxWidth:'100%'}}/>
                )}
            </div>
            <div className='p-5'>
                {plot &&(
                    <img src={prediction} style={{maxWidth:'100%'}}/>
                )}
            </div>
            <div className='text-light p-3'>
                <h3>Model Evaluation</h3>
                <p>Mean Square Error (MSE) : {mse}</p>
                <p>R-Squared (R2) : {r2}</p>
                <p>Root Mean Square Error (RMSE) : {rmse}</p>
            </div>

        </div>
        )}
    </>
  )
}

export default Dashboard