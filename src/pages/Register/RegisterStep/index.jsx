import React from 'react'
import './style.css'

import Step1 from '../../../assets/Step/Step1.png'
import Step2 from '../../../assets/Step/Step2.png'
import Step3 from '../../../assets/Step/Step3.png'
import Step4 from '../../../assets/Step/Step4.png'


const RegStep = () => {
    return (
        <>
            <div className='step'>
                <div className='stepContain'>
                    <div className='title'>
                        <p>
                            ขั้นตอนการสมัครสมาชิก
                        </p>
                        <p>
                            พร้อมที่จะเป็นผู้กำหนดทิศทางอาชีพของตนแล้วหรือยัง
                        </p>
                    </div>
                    <div className='box-side'>
                        <div className='box'>
                            <div className='boxL'>
                                <img src={Step1} alt='Step1' width={58.96} height={56.33} />
                            </div>
                            <div className='boxR'>
                                ระบุอีเมลสำหรับการใช้งานสมัครสมาชิก และตั้งค่ารหัสผ่าน
                            </div>
                        </div>
                        <div className='box'>
                            <div className='boxL'>
                                <img src={Step2} alt='Step2' width={58.96} height={56.33} />
                            </div>
                            <div className='boxR'>
                                ยืนยันรหัส OTP อีเมลที่ระบุไว้ข้างต้น เพื่อยืนยันตัวตนการใช้งาน
                            </div>
                        </div>
                        <div className='box'>
                            <div className='boxL'>
                                <img src={Step3} alt='Step3' width={58.96} height={56.33} />
                            </div>
                            <div className='boxR'>
                                ระบุข้อมูลส่วนตัวเบื้องต้น และประวัติการทำงาน (สามารถเพิ่มภายหลังได้)
                            </div>
                        </div>
                        <div className='box'>
                            <div className='boxL'>
                                <img src={Step4} alt='Step4' width={58.96} height={56.33} />
                            </div>
                            <div className='boxR'>
                                ยืนยันข้อมูล / ทำรายการสมัครสมาชิกสำเร็จ
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RegStep