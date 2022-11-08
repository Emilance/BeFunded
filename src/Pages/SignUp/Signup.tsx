import React, { useState } from 'react'
import Header from '../../component/header/Header';
import './Signup.css';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai'

const Signup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleSignUp = (e: any) => {
    e.preventDefault();

    navigate('/verify');
  }

  return (
    <div className='signUp'>
      <Header />

      <div className="signUp__container">
        <h1 className='signUp__header'>Create Account</h1>

        <div className="signUp__option">
          <div className='signUp__optionButton'>
            <h3>Enterpreneur</h3>
            <small>Get Funded for Your Ideas</small>
          </div>

          <div className='signUp__optionButton'>
            <h3>Investors</h3>
            <small>Fund Amazing Ideas and get equity</small>
          </div>
        </div>

        <form className='signUp__form' onSubmit={handleSignUp}>
          <div className="signUp__formInput">
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              placeholder='Name'
            />
          </div>

          <div className="signUp__formInput">
            <label htmlFor="email">Email Address</label>
            <input 
              type="email" 
              placeholder='Personal or Business Address'
            />
          </div>

          <div className="signUp__formInput signUp__password">
            <label htmlFor="password">Password</label>
            <input 
              type={showPassword ? "text" : "password"} 
              placeholder='********'
            />
            {
              showPassword ? 
                <AiOutlineEye className='signUp__passwordIcon' onClick={() =>setShowPassword(!showPassword)}/>  : 
                <AiOutlineEyeInvisible className='signUp__passwordIcon'onClick={() =>setShowPassword(!showPassword)}/>
            }
          </div>

          <button className='signUp__formButton'>Create Account</button>

          <div className="signUp__question">
            <p>Already have an account? <Link to={'/login'} style={{ textDecoration: "none", fontWeight: "bold", color: "#132CAD"}}>Log in</Link> </p>
          </div>

          <button className="signUp__google">Sign up with Google</button>
        </form>
      </div>
    </div>
  )
}

export default Signup