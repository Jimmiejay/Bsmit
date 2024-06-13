import React from 'react'
import Header from '../../components/Header'
import Register from '../../components/Register'
import './style.css'

function RegisterPage() {
  return (
      <div className='register-container'>
        <Header />
        <main>
          <Register />
        </main>
      </div>
  )
}

export default RegisterPage