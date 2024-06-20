import React from 'react'
import './style.css'

import SearchJob from '../SearchJob'
import Benefits from '../Benefits'

import Feedback from '../Feedback'


const HomeContent = () => {
    return (
        <div className='HomePage'>
            <div className="card-group">
                <div className='Home-content '>
                    <div className='first'>
                        <SearchJob />
                    </div>
                    <div className='second'>
                        <Benefits />
                    </div>
                    <div className='third'>
                        โรงพยาบาลที่ท่านสนใจสมัครงาน (bambam)
                    </div>
                    <div className='fourth'>
                        <Feedback />
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