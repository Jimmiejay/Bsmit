import React from 'react'
import Header from '../../components/Header'
<<<<<<< HEAD
import Register from '../../components/Register'
=======
import Footer from '../../components/Footer'
// import Main from '../../components/Main'
import RegisterButton from '../../components/RegisterButton'
>>>>>>> adb661f861458fc9509a65e43a758793713a71fc
import './style.css'

function RegisterPage() {
  return (
<<<<<<< HEAD
      <div className='register-container'>
        <Header />
        <main>
          <Register />
        </main>
      </div>
=======
    <>
      <div className='register-container'>
        <Header />
        <main>
          Register Page
          <RegisterButton />
          {/* <Main /> */}
        </main>
      </div>
      <Footer />
    </>
>>>>>>> adb661f861458fc9509a65e43a758793713a71fc
  )
}

export default RegisterPage