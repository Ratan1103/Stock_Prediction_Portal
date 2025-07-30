import { useState } from 'react'
import './assets/css/style.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Register from './components/Register'
import Footer from './components/Footer'
import Header from './components/header'
import Home from './components/Home'
import Login from './components/Login'
import AuthProvider from './AuthProvider'
import Dashboard from './dashboard/Dashboard'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

function App() {
  

  return (
    <>
    <AuthProvider>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<PublicRoute><Register /></PublicRoute>} />
          <Route path='/login' element={<PublicRoute><Login /></PublicRoute>} />
          <Route path='/Dashboard' element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
    </>
  )
}

export default App
