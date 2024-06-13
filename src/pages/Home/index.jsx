import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import './style.css'

function Home() {
  return (
    <>
      <div className='home-container'>
        <Header />
        <main>
          Home Content
        </main>
      </div>
      <Footer />
    </>
  )
}

export default Home