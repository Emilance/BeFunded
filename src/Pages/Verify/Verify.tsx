import React from 'react';
import './Verify.css';
import BefundedLogo from '../../assets/BeFunded.svg';
import { useNavigate } from 'react-router-dom';

const Verify = () => {
  const navigate = useNavigate();
  const goToDashBoard = () => {
    navigate('/dashboard')
  }
  
  return (
    <div className="verify">
        <div className="verify__logo">
            <img src={BefundedLogo} alt="Befunded" />
        </div>

        <div className="verify__container">
            <h1 className="verify__containerHeader">Verify Email Address</h1>

            <div className="verify__body">
                <p>Your Account has been created Successfully. Check your email to verify your account and continue to app.</p>
            </div>

            <button className="verify__button" onClick={goToDashBoard}>Log in to continue</button>

            <p className="verify__mail">View Mail</p>
        </div>
    </div>
  )
}

export default Verify