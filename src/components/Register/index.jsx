import React from 'react';
import RegisterButton from '../../components/RegisterButton';
import './style.css';

function Register() {
    return (
        <div className='registerpage'>
            <div className='register-content'>
                <div className='left-column'>
                    <h2>Left Column</h2>
                    <p>Some content for the left column.</p>
                </div>
                <div className='right-column'>
                    <h2>Right Column</h2>
                    <p>Some content for the right column.</p>
                    <RegisterButton />
                </div>
            </div>
        </div>
    );
}

export default Register;