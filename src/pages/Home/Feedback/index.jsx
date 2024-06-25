import React from 'react'
import './style.css'

import LineImg from '../../../assets/home/line.png'
import MessageboxImg from '../../../assets/home/messagebox.png'
import QuotationMarks from '../../../assets/home/quotationmarks.png'



const Feedback = () => {
    return (
        <div className='Feedback'>
            <div className='FBBackground'>
                <div className='FeedbackContainer'>
                    <div className='FeedbackGrid'>
                        <div className='sidebar'>
                            <div className='ReviewCard'>
                                <div className='Reviewterms-text'>
                                    <h1>เสียงตอบรับจากผู้สมัคร</h1>
                                    <div className='Reviewlayout'>
                                        <h2>รีวิวที่คุณอาจสนใจ</h2>
                                    </div>
                                    <a href="/#All-reviews" className='MorereviewLink'>
                                        <h3>ดูรีวิวทั้งหมด</h3></a>
                                </div>
                            </div>
                        </div>
                        <div class='card'>
                            <div className='Messageboxlayout'>
                                <img className='Messageboximg' src={MessageboxImg} alt="Message box" />
                                <div className='Namelayout'>
                                    <div className='Nametxt'>คุณ อิสระ</div>
                                    <div className='Departmentlayout'>
                                        <div className='Departmenttxt'>พยาบาลวิชาชีพ แผนก ICU </div>
                                        <div className='Departmentspanlayout'>
                                            <span className='Departmentspantxt'>โรงพยาบาลสมิติเวช สุขุมวิท</span>
                                        </div>
                                        <div className='lineimglayout'>
                                            <img className='lineimg' src={LineImg} alt="Line Img" />
                                        </div>
                                        <div className='TextReviewLayout'>
                                            <div className='Quotationmarkslayout'>
                                                <img className='Quotationmarksimg' src={QuotationMarks} alt="Quotation Marks" />
                                            </div>
                                            <div className='TextReview'>เราได้สมัครตำแหน่งงานพยาบาลวิชาชีพ แผนก ICU
                                                ตอบรับการนัดสัมภาษณ์รวดเร็วมากเลยค่ะ</div>
                                        </div>
                                        <div className='TimeLayout'>
                                            <div className='Date'>14/04/2567 20:16</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='card'>
                            <div className='Messageboxlayout2'>
                                <img className='Messageboximg2' src={MessageboxImg} alt="Message box" />
                                <div className='Namelayout'>
                                    <div className='Nametxt'>คุณ ดีเด่น</div>
                                    <div className='Departmentlayout'>
                                        <div className='Departmenttxt'>พยาบาลวิชาชีพ แผนก Cath Lab</div>
                                        <div className='Departmentspanlayout'>
                                            <span className='Departmentspantxt'>โรงพยาบาลสมิติเวช สุขุมวิท</span>
                                        </div>
                                        <div className='lineimglayout'>
                                            <img className='lineimg' src={LineImg} alt="Line Img" />
                                        </div>
                                        <div className='TextReviewLayout'>
                                            <div className='Quotationmarkslayout'>
                                                <img className='Quotationmarksimg' src={QuotationMarks} alt="Quotation Marks" />
                                            </div>
                                            <div className='TextReview'>“เราได้สมัครตำแหน่งงานพยาบาลวิชาชีพ แผนก Cath Lab
                                                ตอบรับการนัดสัมภาษณ์รวดเร็วมากเลยค่ะ”</div>
                                        </div>
                                        <div className='TimeLayout'>
                                            <div className='Date'>14/04/2567 20:16</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="slider-controls">
                            <button class="prev-btn">&lt;</button>
                            <button class="next-btn">&gt;</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feedback