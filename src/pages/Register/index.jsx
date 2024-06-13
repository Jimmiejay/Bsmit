import React from 'react'
import Header from '../../components/Header'
import Register from '../../components/Register'
import Footer from '../../components/Footer'
import './style.css'

function RegisterPage() {
  return (
      <div className='register-container'>
        <Header />
          <Register />
        <Footer />
      </div>
  )
}

export default RegisterPage