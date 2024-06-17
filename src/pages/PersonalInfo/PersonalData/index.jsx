import React from 'react'

import './style.css'

const PersonalData = () => {
    return (
        <>
            <div className='dataContainer'>
                <div className='titleTxt'>
                    ระบุข้อมูลส่วนตัว
                </div>
                <div className='dataInput first'>
                    <form>
                        <label>ชื่อ</label>
                        <div>
                            <input type='text' placeholder="กรอกชื่อ" required></input>
                        </div>
                    </form>
                    <form>
                        <label>นามสกุล</label>
                        <div>
                            <input type='text' placeholder="กรอกนามสกุล" required></input>
                        </div>
                    </form>
                    <form>
                        <label>วันเดือนปีเกิด (ค.ศ)</label>
                        <div>
                            <input type='date' placeholder="กรอกวันเดือนปีเกิด" required></input>
                        </div>
                    </form>
                </div>
                <div className='dataInput second'>
                    <form>
                        <label>เลขบัตรประชาชน</label>
                        <div>
                            <input type='text' maxlength="13" placeholder="กรอกเลขบัตรประชาชน" required></input>
                        </div>
                    </form>
                    <form>
                        <label>บัตรหมดอายุ</label>
                        <div>
                            <input type='text' placeholder="กรอกวันบัตรหมดอายุ" required></input>
                        </div>
                    </form>
                </div>
                <div className='dataInput third'>
                    <form>
                        <label>สถานที่เกิด</label>
                        <div>
                            <input className='inputBox' placeholder="กรอกสถานที่เกิด" required></input>
                        </div>
                    </form>
                </div>
                <div className='dataInput fourth'>
                    <form>
                        <label>น้ำหนัก</label>
                        <div>
                            <input placeholder="กรอกน้ำหนัก" required></input>
                        </div>
                    </form>
                    <form>
                        <label>ส่วนสูง</label>
                        <div>
                            <input placeholder="กรอกส่วนสูง" required></input>
                        </div>
                    </form>
                </div>
                <div className='dataInput fifth'>
                    <form>
                        <label>เงินเดือนที่ต้องการ</label>
                        <div>
                            <input type='' placeholder="10,000 - 20,000 บาท" maxlength="5" required></input>
                        </div>
                    </form>
                </div>

            </div>
        </>
    )
}

export default PersonalData