import React from 'react'
import './style.css'
import LanguageSelector from '../LanguageSelector/index.jsx'

import BNH from '../../assets/BNH.png'
import Samitivevej from '../../assets/Samitivevej.png'
import FHF from '../../assets/FHF.png'
import call from '../../assets/call-calling.png'
import icon from '../../assets/icon.png'


const Footer = () => {
    return (
        <>
            <div className='footer'>
                <div className='footer-container '>
                    <div className='contact-side'>
                        <img className='logo' src={Samitivevej} />
                        <img className='logo' src={BNH} />
                        <img className='logo' src={FHF} />
                        <div className='contact-txt'>
                            สอบถามโทร
                        </div>
                        <div className='phone'>
                            <img src={call} />
                            <div className='phone-number'>
                                +66 (0) 2022-2222
                            </div>
                        </div>
                        <div className='contact-icon'>
                            ติดตามเรา:
                            <img className='icon' src={icon} />
                        </div>
                    </div>
                    <div className='data-side'>
                        <div>
                            ค้นหางาน
                        </div>
                        <div>
                            ลงทะเบียน
                        </div>
                        <div>
                            ข้อกำหนดและเงื่อนไข
                        </div>
                        <div>
                            โปรไฟล์
                        </div>
                        <div>
                            แบบทดสอบ AI Test
                        </div>
                        <div>
                            ความปลอดภัยและความเป็นส่วนตัว
                        </div>
                        <div>
                            สวัสดิการและสิทธิประโยชน์
                        </div>
                        <div>
                            บทความแนะนำ
                        </div>
                        <div>
                            ติดต่อเรา
                        </div>
                        <div>
                            งานแนะนำ
                        </div>
                        <div>
                            งานที่บันทึก
                        </div>
                    </div>


                </div>
            </div>
            <div className='last'>
                <div className='last-container'>
                    <div className='last-txt'>
                        สงวนลิขสิทธิ์ 0000-2024 โดย บริษัท xxxxxxx (ประเทศไทย) จำกัด
                    </div>
                    <div className='last-language'>
                        <LanguageSelector />
                    </div>
                </div>
            </div>
        </>

    )
}

export default Footer