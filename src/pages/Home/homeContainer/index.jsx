import React from 'react'
import './style.css'

import SearchJob from '../SearchJob'
import Benefits from '../Benefits'

import Feedback from '../Feedback'
import Hostpital from '../hostpital'
import Advice from '../Advice'


const HomeContent = () => {
    return (
        <>
            <div className='first'>
                <SearchJob />
            </div>
            <div className='HomePage'>
                <div className="card-group">
                    <div className='Home-content '>
                        <div className='second'>
                            <Benefits />
                        </div>
                        <div className='third'>
                            <Hostpital />
                        </div>
                        <div className='fourth'>
                            {/* <Feedback /> */}
                        </div>
                        <div className='fifth'>
                            <Advice />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeContent