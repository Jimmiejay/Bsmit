import React from 'react'
import image from '../../assets/image.png'
import LanguageSelector from '../LanguageSelector/index.jsx'
import './style.css'

function Header() {
  return (
    <div className='header'>
      <div className='content-wrap'>
        {/* left */}
        <img className='img' src={image} alt="img" />

        {/* right */}
        <div className="right">
        <LanguageSelector/> 
        </div>
      </div>
    </div>

  )
}

export default Header