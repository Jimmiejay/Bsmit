import React from 'react'
import './style.css'

import SearchJob from '../SearchJob'
import Hostpital from '../hostpital'
import Advice from '../Advice'


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
                        <Hostpital />
                    </div>
                    <div className='fourth'>
                        เสียงตอบรับจากผู้สมัคร (film)
                    </div>
                    <div className='fifth'>
                       <Advice />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeContent