import React from 'react'
import './style.css'

const registerform = () => {
  return (
    <div className='registerform'>
      <div>
        <h1>สมัครสมาชิก</h1>
        <label className='label'>
          <h2>อีเมล</h2>
          <h3>สำหรับการเข้าสู่ระบบและรับการติดต่อจากนายจ้าง</h3>
        </label>
        <input className='input' type="email" id="email" name="email" required placeholder="กรอกอีเมล" />
      </div>
      <div>
        <label className='label'><h2>รหัสผ่าน</h2></label>
        <input className='input' type="password" id="password" name="password" required placeholder="กรอกรหัสผ่าน" />
      </div>
      <div>
        <label className='label'><h2>ยืนยันรหัสผ่าน</h2></label>
        <input className='input' type="password" id="confirmPassword" name="confirmPassword" required placeholder="กรอกรหัสผ่าน" />
      </div>
      <div className="terms-container">
        <div className="checkbox-container">
          <input type="checkbox" id="termsAndConditions" name="termsAndConditions" required />
          <div className='terms-text'>
            <h2>
              ฉันยอมรับ นโนบายความเป็นส่วนตัว และยินยอมให้เก็บ
              รวบรวม และใช้ข้อมูลส่วนบุคคลของฉันตามที่ระบุ
              ในนโยบายดังกล่าว ฉันตกลงที่จะรับข้อความ
              ทางการตลาดจาก BSMIT และบริษัทในเครือ
              และเข้าใจว่าฉันสามารถเพิกถอน
              ความยินยอมเมื่อใดก็ได้ผ่านทางลิงก์ยกเลิกการรับข้อความ
              หรือตามรายละเอียดในนโนบายความเป็นส่วนตัว
            </h2>
          </div>
        </div>
      </div>
      <div>
        <button className='button' type="sumit">ลงทะเบียน</button>
      </div>
      <div className='nouser-text'>
      <h2 style={{display: 'inline-block'}}>คุณมีบัญชีผู้ใช้อยู่แล้วหรือไม่?</h2> 
      <h4 style={{display: 'inline-block'}}>เข้าสู่ระบบ</h4>
      </div>
    </div>
  )
}

export default registerform