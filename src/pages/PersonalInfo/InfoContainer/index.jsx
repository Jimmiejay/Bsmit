import React from 'react'
import Contactform from '../ContactInfo/contactform'
import './style.css'

const InfoContainer = () => {
  return (
    <div className='InfoPage'>
      <div className="card-group">
        <div className='Info-content '>
          <div className='top'>
            ssssaaaaa
          </div>
          <div className='under'>
            <Contactform/>
          </div>
        </div>
        <div className='Info-buttonBox'>
        <button className='B1' type='button'>ข้าม</button>
        <button className='B2' type='button'>บันทึก และดำเนินการต่อ</button>
        </div>
      </div>
    </div>
  )
}

export default InfoContainer