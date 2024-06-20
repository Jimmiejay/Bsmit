import React from 'react'
import './style.css'

import logo from '../../../assets/home/Logo.png'
import bnh from '../../../assets/home/BNH.png'
import fhf from '../../../assets/home/FHF.png'
import child from '../../../assets/home/children.png'

const Hostpital = () => {
  return (
    <>
      <div className='hostpital'>
        <div className='hostContainer'>
          <div className='txtBox'>
            <h1>โรงพยาบาลที่ท่านสนใจสมัครงาน</h1>
            <div className='link'>
              <a href='#'>ดูสาขาโรงพยาบาลทั้งหมด</a>
            </div>
          </div>
          <div className='boxContainer'>
            <button type='button' className='box'>
              <img src={logo} className='img' />
              <h3>โรงพยาบาลสมิติเวช สุขุมวิท</h3>
            </button>
            <button type='button' className='box'>
              <img src={logo} className='img' />
              <h3>โรงพยาบาลสมิติเวช ศรีนครินทร์</h3>
            </button>
            <button type='button' className='box'>
              <img src={child} className='img' />
              <h3>โรงพยาบาลเด็กสมิติเวช</h3>
            </button>
            <button type='button' className='box'>
              <img src={logo} className='img' />
              <h3>โรงพยาบาลสมิติเวช ธนบุรี</h3>
            </button>
            <button type='button' className='box'>
              <img src={logo} className='img' />
              <h3>โรงพยาบาลสมิติเวช ไชน่าทาวน์</h3>
            </button>
            <button type='button' className='box'>
              <img src={bnh} className='bnh' />
              <h3>BNH hospital</h3>
            </button>
            <button type='button' className='box'>
              <img src={fhf} className='fhf' />
              <h3>First Health Food Co., Co Ltd.</h3>
            </button>
            <button type='button' className='box'>
              <img src={logo} className='img' />
              <h3>โรงพยาบาลสมิติเวช ศรีราชา</h3>
            </button>
            <button type='button' className='box'>
              <img src={logo} className='img' />
              <h3>โรงพยาบาลสมิติเวช ชลบุรี</h3>
            </button>
          </div>
        </div>
      </div>
    </>

  )
}

export default Hostpital