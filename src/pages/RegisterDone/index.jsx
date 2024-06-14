import React from 'react'
import './style.css'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import RegDone from './RegDoneContainer/index'

const RegDonePage = () => {
    return (
        <>
            <div className='regDone-container '>
                <Header />
                <RegDone />
                <Footer />
            </div>
        </>
    )
}

export default RegDonePage