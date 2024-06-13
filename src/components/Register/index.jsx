import React from 'react';
import Registerform from '../../pages/Register/form/registerform';
import './style.css';

function Register() {
    return (
        <div className='registerpage'>
            <div className="card-group">
                <div className='register-content'>
                    <div className='left-column'>
                        <h1>Left Column</h1>
                        <p>Some content for the left column.</p>
                    </div>
                    <div className='right-column'>
                        <Registerform />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;