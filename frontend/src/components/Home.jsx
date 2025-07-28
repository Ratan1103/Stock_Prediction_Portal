import React from 'react'
import '../assets/css/style.css'
const Home = () => {
  return (
    <>
      <div className='container'>
        <div className='p-5 text-center bg-light-dark rounded'>
          <h1 className='text-light'>Welcome to Stock Portal — Your Smart Investment Companion.</h1>
          <p className='text-light lead'>Our platform uses advanced machine learning algorithms to
             help you make informed investment decisions by analyzing historical market trends
              and predicting future stock prices. Whether you're a beginner or a seasoned trader,
               Stock Portal provides real-time insights, intuitive visualizations, and personalized 
               recommendations to guide your trading strategy. Empower your financial journey with 
               data-driven predictions and stay ahead in the stock market.</p>
               <a className='btn btn-outline-info me-3' href="#">Login</a>
        </div>
      </div>
    </>
  )
}

export default Home