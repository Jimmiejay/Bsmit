import React from 'react'
import './style.css'

const Profile = () => {
  return (
    <>
      <div className='profile'>
        <div className='top'>
          <h1>ความสมบูรณ์ของโปรไฟล์</h1>
          <progress value={40} max={100} style={{ width: 303}} />
        </div>
        <div>
          <h2>โปรไฟล์ของคุณ</h2>
        </div>
        <div className='txt'>
          <p>ต้องการเพิ่มข้อมูลของคุณ</p>
          <p>เพื่อให้โปรไฟล์ของคุณความสมบูรณ์มากขึ้น</p>
        </div>
        <div>
          <button className='Probutton' type='button'>จัดการโปรไฟล์</button>
        </div>
      </div>
    </>
  )
}

export default Profile