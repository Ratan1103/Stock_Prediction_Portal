import React from 'react'
import { useEffect } from 'react'
import axiosInstance from '../axiosInstance'
const Dashboard = () => {
    const accessToken=localStorage.getItem('accessToken')
    useEffect(()=>{
        const fetchProtectedData= async ()=>{
            try{
                const response = await axiosInstance.get('/protected-view/')
                console.log('Seccess :',response.data)
            }
            catch(error){
                console.log('Error Fetching Data :',error)
            }
        }
        fetchProtectedData();
    },[])
  return (
    <div className='text-light'>Dashboard</div>
  )
}

export default Dashboard