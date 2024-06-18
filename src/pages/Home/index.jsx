import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import './style.css'

import HomeContent from './homeContainer/index'

function Home() {
  return (
    <>
      <div className='home-container'>
        <Header />
        <HomeContent />
        <Footer />
      </div>
    </>
  )
}

export default Home