import React from 'react'
import Header from '../../components/Header'
import Register from '../../components/Register'
import Footer from '../../components/Footer'
// import Main from '../../components/Main'
import RegisterButton from '../../components/RegisterButton'
import './style.css'

function RegisterPage() {
  return (
    <>
      <div className='register-container'>
        <Header />
        <main>
          <Register />
        </main>
      </div>
      <Footer />
    </>
  )
}

export default RegisterPage