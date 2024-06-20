import React from 'react'
import './style.css'

import benefits from '../../../assets/home/benefits.png'
import searchHospital from '../../../assets/home/searchHospital.png'
import article from '../../../assets/home/article.png'

const Benefits = () => {
    return (
        <div className='Benefits'>
            <div className='BenefitsContainer'>
                <div className='BenefitCard'>
                    <div className='ImageContainer'>
                        <a href="/#Welfare-and-Benefits" className="link">
                            <div class="benefitspic-container">
                                <img className='benefitspic' src={benefits}
                                    alt='Welfare and benefits'></img>
                                <div class="benefitspic-overlay"></div>
                            </div>
                            <div className='benefitImageOverlay'>
                                <h3>Welfare and benefits</h3>
                                <h4>สวัสดิการและสิทธิประโยชน์</h4>
                            </div>
                        </a>
                    </div>
                </div>
                <div className='BenefitCard'>
                    <div className='ImageContainer'>
                        <a href="/#Search-for-Job/Hospital" className="link">
                            <div class="searchHospitalpic-container">
                                <img className='searchHospitalpic' src={searchHospital} alt='Search for Job/Hospital'></img>
                                <div class="searchHospitalpic-overlay"></div>
                            </div>
                            <div className='searchHospitalImageOverlay'>
                                <h3>Search for Job/ Hospital</h3>
                                <h4>ค้นหางานและโรงพยาบาล</h4>
                            </div>
                        </a>
                    </div>
                </div>
                <div className='BenefitCard'>
                    <div className='ImageContainer'>
                        <a href="/#Interesting-article" className="link">
                        <div class="articlepic-container">
                            <img className='articlepic' src={article} alt='Interesting article'></img>
                            <div class="articlepic-overlay"></div>
                            </div>
                            <div className='articleImageOverlay'>
                                <h3>Interesting article</h3>
                                <h4>บทความน่าสนใจ</h4>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Benefits 