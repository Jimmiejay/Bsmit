import React from 'react'
import './style.css'

const registerform = () => {
  return (
    <div className='registerform'>
      <div className='div'>
        <label className='label'>อีเมล</label>
        <h3>สำหรับการเข้าสู่ระบบและรับการติดต่อจากนายจ้าง</h3>
        <input className='input' type="email" id="email" name="email" required  placeholder="กรอกอีเมล" />
      </div>
      <div className='div'>
        <label className='label'>รหัสผ่าน:</label>
        <input className='input' type="password" id="password" name="password" required />
      </div>

    </div>
  )
}

export default registerform