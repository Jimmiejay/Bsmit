import React from 'react'
import './style.css'

import Banner from '../Banner'
import startup from '../../../assets/RegDone/startup.png'
import Profile from '../Profile'

const RegDone = () => {
    return (
        <div className='regDonePage'>
            <div className="card-group">
                <Banner />
                <div className='regDone-content'>
                    <div className='left-column'>
                        <img src={startup} alt='startup' width={256} height={255} />
                    </div>
                    <div className='right-column'>
                        <Profile />
                    </div>
                </div>
                <div className='buttonBox'>
                    <button className='Regbutton' type='button'>กลับไปยังหน้าหลัก</button>
                </div>
            </div>
        </div>
    )
}

export default RegDone