import React from 'react';
import Registerform from '../form/registerform';
import RegStep from '../RegisterStep';
import './style.css';

function Register() {
    return (
        <div className='registerpage'>
            <div className="card-group">
                <div className='register-content'>
                    <div className='left-column'>
                        <RegStep />
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