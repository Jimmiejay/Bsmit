import React, { useState } from 'react';
import './style.css';

function ReguestOTPform() {
    const [otp, setOTP] = useState('');
    const [email] = useState('example@gmail.com');

    const handleOTPChange = (e) => {
        setOTP(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="requestform">
            <h2>ระบบได้ส่งรหัส OTP</h2>
            <h2>ไปยังอีเมลที่ท่านเคยลงทะเบียนไว้เรียบร้อยแล้ว</h2>

            <div className="email-otp-container">
                <span className="email-text">{email}</span>
                <a href="#" className="request-otp-link"><h4>ขอรหัส OTP ใหม่</h4></a>
            </div>
            <div className="otp-ref">ระบุรหัส OTP (Ref. 0802)</div>
            <label className="label">
                <div className="input-group">
                    <input
                        type="text"
                        className="otp-input"
                        value={otp}
                        onChange={handleOTPChange}
                        maxLength={6}
                        pattern="\d*"
                        placeholder="กรอกรหัส OTP 6 หลัก"
                    />
                </div>
            </label>
            <div className='nouser-text2'>
                <div className="otp-expiry" style={{ display: 'inline-block' }}>รหัส OTP หมดอายุภายใน </div>
                <h5 style={{ display: 'inline-block' }}> 1:00 </h5>
                <div className="otp-expiry" style={{ display: 'inline-block' }}>นาที</div>
            </div>
            <button type="submit" onClick={handleSubmit}>ยืนยัน</button>
        </div>
    );
}

export default ReguestOTPform;