import React from 'react';
import ReqStep from '../RequestStep';
import ReguestOTPform from '../Requestform/requestform';
import './style.css';

function ReguestOTP() {
    return (
        <div className='requestotppage'>
            <div className="reqcard-group">
                <div className='request-content'>
                    <div className='left-column'>
                        <ReqStep />
                    </div>
                    <div className='right-column'>
                        <ReguestOTPform />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReguestOTP;