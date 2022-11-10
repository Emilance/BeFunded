import React, { useState } from 'react'
import Header from '../../component/header/Header';
import './Signup.css';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai'
import axios from "axios"
import { setToken, setUser } from '../../auth';
const Signup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole]  = useState("investor")
  const [forminput, setForminput]  = useState({name :"", email:"", password:""})
  const handleSignUp = (e: any) => {
    e.preventDefault();
    axios.post("https://befunded.herokuapp.com/signup", {...forminput, role } ).then(res => {
      console.log(res)
      const resp = res.data
      setUser(resp.user)
      setToken(resp.token)
      navigate('/verify');
    }).catch(err =>{
      console.log(err)
    })
  }
  
  return (
    <div className='signUp'>
      <Header />

      <div className="signUp__container">
        <h1 className='signUp__header'>Create Account</h1>

        <div className="signUp__option">
          <div onClick={()=> setRole("enterpreneur")} className={role =="enterpreneur" ? 'signUp__optionButton  SO_active' : "signUp__optionButton"}>
            <h3>Enterpreneur</h3>
            <small>Get Funded for Your Ideas</small>
          </div>

          <div onClick={()=> setRole("investor")} className={role =="investor" ? 'signUp__optionButton  SO_active' : "signUp__optionButton"}>
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
              value={forminput.name}
              onChange={(e) => setForminput({...forminput, name: e.target.value})}
            />
          </div>

          <div className="signUp__formInput">
            <label htmlFor="email">Email Address</label>
            <input 
              type="email" 
              placeholder='Personal or Business Address'
              value={forminput.email}
              onChange={(e) => setForminput({...forminput, email: e.target.value})}          />
          </div>

          <div className="signUp__formInput signUp__password">
            <label htmlFor="password">Password</label>
            <input 
              type={showPassword ? "text" : "password"} 
              placeholder='********'
              value={forminput.password}
              onChange={(e) => setForminput({...forminput, password: e.target.value})}            />
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