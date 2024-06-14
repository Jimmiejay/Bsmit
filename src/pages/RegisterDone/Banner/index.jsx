import React from 'react'
import './style.css'
import Check from '../../../assets/RegDone/Check.png'

const Banner = () => {
  return (
    <>
      <div className='Banner'>
        <div className='Banner-Container'>
          <div className='L'>
            <h1>สมัครสมาชิกสำเร็จ</h1>
            <p>คุณได้สมัครสมาชิกกับระบบ BSMIT เรียบร้อยแล้ว และพร้อมใช้งาน</p>
          </div>
          <div className='R'>
            <img src={Check} alt='Check' width={38.03} height={38.03} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Banner