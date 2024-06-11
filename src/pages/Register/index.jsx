import React from 'react'
import Header from '../../components/Header'
// import Main from '../../components/Main'
import RegisterButton from '../../components/RegisterButton'
import './style.css'

function Register() {
  return (
    <div className='register-container'>
      <Header />
      <main>
        Register Page
        <RegisterButton/>
        {/* <Main /> */}
      </main>
    </div>
  )
}

export default Register