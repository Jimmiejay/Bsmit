import React from 'react'
import Header from '../../components/Header'
import RequestOTP from './RequestContainer'
//import Register from '../Register/RegisterContainer'
import Footer from '../../components/Footer'
import './style.css'


function ReguestOTPPage() {
    return (
        <div className='requestotp-container'>
            <Header />
          
              <RequestOTP /> 
              {/* <Register /> */}
            
            <Footer />
        </div>
    )
}
export default ReguestOTPPage
