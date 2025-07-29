import { useState } from 'react'
import './assets/css/style.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Register from './components/Register'
import Footer from './components/Footer'
import Header from './components/header'
import Home from './components/Home'
import Login from './components/Login'

function App() {
  

  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
