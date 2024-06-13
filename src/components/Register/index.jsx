import React from 'react';
import RegisterButton from '../../components/RegisterButton';
import Registerform from '../../pages/Register/form/registerform';
import './style.css';

function Register() {
    return (
        <div className='registerpage'>
            <div className='register-content'>
                <div className='left-column'>
                    <h1>Left Column</h1>
                    <p>Some content for the left column.</p>
                </div>
                <div className='right-column'>
                    <h1>สมัครสมาชิก</h1>
                    <Registerform />
                    <RegisterButton />
                </div>
            </div>
        </div>
    );
}

export default Register;