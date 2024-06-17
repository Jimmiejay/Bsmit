import React, { useState } from 'react'
import './style.css'

const contactform = () => {

    const [email] = useState('example@gmail.com');
    const [address, setAddress] = useState('');
    const [address2, setAddress2] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [phone, setPhone] = useState('');
    const [terms, setTerms] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Address:', address);
        console.log('Address:', address2);
        console.log('Zip Code:', zipCode);
        console.log('Phone:', phone);
        console.log('Terms:', terms);
    };

    return (
        <div className='contactform'>
            <h1>ข้อมูลติดต่อ</h1>
            <form onSubmit={handleSubmit}>
                <div className='phoneform'>
                    <div className='phone-text'>
                        <label className='label'>
                            <h2>โทรศัพท์มือถือ</h2>
                        </label>
                        <input className='input' type="tel" id="phone" name="phone"
                            onChange={(e) => setPhone(e.target.value)}
                            required placeholder="กรอกเบอร์โทรศัพท์มือถือ" pattern="[0-9]{10}" />
                    </div>
                    <div>
                        <div className='phone-text'>
                            <label className='label'>
                                <h2>โทรศัพท์บ้าน (ถ้ามี)</h2>
                            </label>
                            <input className='input' type="tel" id="phone" name="phone"
                                onChange={(e) => setPhone(e.target.value)}
                                required placeholder="กรอกเบอร์โทรศัพท์บ้าน (ถ้ามี)" pattern="[0-9]{10}" />
                        </div>
                    </div>
                </div>
                <div className='mailform'>
                    <label className='label'>
                        <h2>อีเมล</h2>
                    </label>
                    <div className='email-contact-container'>
                        <span className="emailcontact-text">{email}</span>
                    </div>
                </div>
                <div className='addressform'>
                    <label className='label'>
                        <h2>ที่อยู่ปัจจุบัน (สามารถติดต่อได้สะดวก)</h2>
                    </label>
                    <input className='addressinput' value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required placeholder="บ้านเลขที่, อาคาร/หมู่บ้าน, ชั้น, ถนน" />
                </div>
                <div className='addressform2'>
                    <div className='address-text'>
                        <label className='label'>
                            <h2>เขต/จังหวัด</h2>
                        </label>
                        <input className='input' value={address2}
                            onChange={(e) => setAddress2(e.target.value)}
                            required placeholder="ระบุเขตหรือจังหวัด" />
                    </div>
                    <div className='address-text'>
                        <label className='label'>
                            <h2>ไปรษณีย์</h2>
                        </label>
                        <input className='input' type="text"
                            value={zipCode}
                            onChange={(e) => setZipCode(e.target.value)}
                            required placeholder="กรอกรหัสไปรษณีย์" />
                    </div>
                </div>
                <div className="address-terms-container">
                    <div className='terms-contact-container'>
                        <div className="address-checkbox-container">
                            <input type="checkbox" id="termsAndConditions" name="termsAndConditions" required />
                            <div className='address-terms-text'>
                                <h3>
                                    ที่อยู่ตามทะเบียนบ้านตรงกับที่อยู่ปัจจุบัน
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='emergencyphoneform'>
                        <div className='phone-text'>
                            <label className='label'>
                                <h2>เบอร์ติดต่อกรณีฉุกเฉิน</h2>
                            </label>
                            <input className='input' type="tel" id="phone" name="phone"
                                onChange={(e) => setPhone(e.target.value)}
                                required placeholder="กรอกเบอร์ติดต่อกรณีฉุกเฉิน" pattern="[0-9]{10}" />
                        </div>
                    </div>
                </div>
            </form>
        </div>

    )
}

export default contactform