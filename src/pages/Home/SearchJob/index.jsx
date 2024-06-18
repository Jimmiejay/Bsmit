import React from 'react'
import './style.css'

import BG from '../../../assets/home/SearchJob.jpg'
import glass from '../../../assets/home/MagnifyingGlass.png'
import location from '../../../assets/home/location.png'

const SearchJob = () => {
    return (
        <>
            <div className='JobContainer'>
                <img src={BG} width={1440} height={496} className='bg' />
                <div className='searchContainner'>
                    <div className='searchBox'>
                        <div className='txt'>ค้นหางาน</div>
                        <div className='inputbox'>
                            <img className='icon' src={location} />
                            <input className='first' placeholder='สาขาโรงพยาบาล'></input>
                            <input placeholder='ฉันหางานที่สนใจ'></input>
                            <button className='searchButton' type='button'>
                                <img src={glass} width={15} height={15} />
                                <div className='txtButton'>ค้นหา</div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SearchJob 