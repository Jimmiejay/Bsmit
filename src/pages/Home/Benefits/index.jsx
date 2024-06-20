import React from 'react'
import './style.css'

import benefits from '../../../assets/home/benefits.png'
import searchHospital from '../../../assets/home/searchHospital.png'
import article from '../../../assets/home/article.png'

const Benefits = () => {
    return (
        <div className='BenefitsContainer'>
            <div className='BenefitCard'>
                <div className='ImageContainer'>
                    <img className='benefitspic' src={benefits} alt='Welfare and benefits'></img>
                    <div className='benefitImageOverlay'>
                        <a href="/#Welfare-and-Benefits" className="link">
                            <h3>Welfare and benefits</h3>
                        </a>
                        <h4>สวัสดิการและสิทธิประโยชน์</h4>
                    </div>
                </div>
            </div>
            <div className='BenefitCard'>
                <div className='ImageContainer'>
                    <img className='searchHospitalpic' src={searchHospital} alt='Search for Job/Hospital'></img>
                    <div className='searchHospitalImageOverlay'>
                        <a href="/#Search-for-Job/Hospital" className="link">
                            <h3>Search for Job/ Hospital</h3>
                        </a>
                        <h4>ค้นหางานและโรงพยาบาล</h4>
                    </div>
                </div>
            </div>
            <div className='BenefitCard'>
                <div className='ImageContainer'>
                    <img className='articlepic' src={article} alt='Interesting article'></img>
                    <div className='articleImageOverlay'>
                        <a href="/#Interesting-article" className="link">
                            <h3>Interesting article</h3>
                        </a>
                        <h4>บทความน่าสนใจ</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Benefits 