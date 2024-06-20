import React from 'react'
import './style.css'

import pic1 from '../../../assets/advice/pic1.png'
import pic2 from '../../../assets/advice/pic2.png'

const Advice = () => {
    return (
        <>
            <div className='advice'>
                <div className='adviceContainer'>
                    <div>
                        <h1>รับคำแนะนำด้านอาชีพสำหรับคุณโดยเฉพาะ</h1>
                    </div>
                    <div className='boxContainer'>
                        <div className='box'>
                            <div>
                                <img src={pic1} className='img1' />
                            </div>
                            <div className='txtBox'>
                                <h3>วิธีการสมัคร</h3>
                                <p>
                                    เตรียมตัวสำหรับการสมัครงานและ
                                    <p>
                                        สัมภาษณ์งานด้วยเคล็ดลับจากผู้เชียวชาญ
                                    </p>
                                </p>
                                <p>
                                    <div className='link'>
                                        <a href='#' className='Link' >รายละเอียดเพิ่มเติม</a>
                                    </div>
                                </p>
                            </div>
                        </div>
                        <div className='box'>
                            <div>
                                <img src={pic2} className='img2' />
                            </div>
                            <div className='txtBox'>
                                <h3>ร่วมงานกับเรา</h3>
                                <p>
                                    ค้นพบวิธีทำให้อาชีพเกิดประโยชน์สูงสุด
                                    <p>
                                        สำหรับคุณ
                                    </p>
                                </p>
                                <p >
                                    <div className='link'>
                                        <a href='#' className='Link' >รายละเอียดเพิ่มเติม</a>
                                    </div>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Advice