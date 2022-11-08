import React from 'react'
import './SignIn.css';
import BefundedLogo from '../../assets/BeFunded.svg';
import { Link, useNavigate } from 'react-router-dom';

const SignIn = () => {

  const navigate = useNavigate();

  const handleFormLogin = (e: any) => {
    e.preventDefault();
    navigate('/verify')
  }
  return (
    <div className='signIn'>

      <div className="signIn__logo">
        <img src={BefundedLogo} alt="befunded" />
      </div>

      <div className="signIn__container">
        <h1 className="signIn__header">Log in</h1>


        <div className="signIn__option">
          <div className='signIn__optionButton'>
            <h3>Enterpreneur</h3>
            <small>Get Funded for Your Ideas</small>
          </div>

          <div className='signIn__optionButton'>
            <h3>Investors</h3>
            <small>Fund Amazing Ideas and get equity</small>
          </div>
        </div>

        <form className="signIn__form" onSubmit={handleFormLogin}>
          <div className="signIn__formDiv">
            <label htmlFor="email">Email Address</label>
            <input type="text" placeholder='Personal or business email address'/>
          </div>

          <div className="signIn__formDiv">
            <label htmlFor="password">Password</label>
            <input type="password" placeholder='******'/>
          </div>


          <button className='signIn__formButton'>Log in</button>

          <div className="signIn__question">
            <p>Don't have an account yet? <Link to={'/signup'} style={{ textDecoration: "none", fontWeight: "bold", color: "#132CAD"}}>Create Account</Link> </p>
          </div>

          <button className="signIn__google" >Sign up with Google</button>

        </form>
      </div>
    </div>
  )
}

export default SignIn