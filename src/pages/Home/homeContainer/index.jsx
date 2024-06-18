import React from 'react'
import './style.css'

import SearchJob from '../SearchJob'


const HomeContent = () => {
    return (
        <div className='HomePage'>
            <div className="card-group">
                <div className='Home-content '>
                    <div className='first'>
                        <SearchJob />
                    </div>
                    <div className='second'>
                        สวัสดิการและสิทธิประโยชน์ (film)
                    </div>
                    <div className='third'>
                        โรงพยาบาลที่ท่านสนใจสมัครงาน (bambam)
                    </div>
                    <div className='fourth'>
                        เสียงตอบรับจากผู้สมัคร (film)
                    </div>
                    <div className='fifth'>
                        รับคำแนะนำด้านอาชีพสำหรับคุณโดยเฉพาะ (bambam)
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeContent