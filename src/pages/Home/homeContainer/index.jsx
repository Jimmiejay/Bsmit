import React from 'react'
import './style.css'

import SearchJob from '../SearchJob'


const HomeContent = () => {
    return (
        <div className='HomePage'>
            <div className="card-group">
                <div className='Home-content '>
                    <div className='top'>
                        <SearchJob />
                    </div>
                    <div className='under'>
                        สวัสดิการและสิทธิประโยชน์
                    </div>
                    <div className='top'>
                        โรงพยาบาลที่ท่านสนใจสมัครงาน
                    </div>
                    <div className='under'>
                        เสียงตอบรับจากผู้สมัคร
                    </div>
                    <div className='top'>
                        รับคำแนะนำด้านอาชีพสำหรับคุณโดยเฉพาะ
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeContent