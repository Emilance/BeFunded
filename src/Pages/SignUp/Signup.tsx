import React, { useEffect, useState } from 'react'
import Header from '../../component/header/Header';
import './Signup.css';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai'
import axios from "axios"
import { setToken, setUser } from '../../auth';
import LogHeader from '../../component/LogHeader';

type errorType={
    name : null | string,
    email: null | string, 
    password:null |string

}
const Signup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole]  = useState("investor")
  const [forminput, setForminput]  = useState({name :"", email:"", password:""})
  const [errors, setErrors] = useState<errorType>({name :null, email:null, password:null})
  const [formIsValid, setFormIsValid] = useState(false)
  const [submit, setSubmit]= useState(false)
  const handleValidation =() => {
    setFormIsValid(true)

    //Namess
    if (!forminput["name"] ) {
      setFormIsValid(false)
      setErrors({...errors ,  name: "Cannot be empty"});
    }
    
 
      // if (!forminput["name"].match(/^[a-zA-Z]+$/)) {
      //   formIsValid = false;
      //   setErrors({...errors, name:"Cannot be a number"  });
      // }
    

    //Email
    if (!forminput["email"]) {
      setFormIsValid(false)
      setErrors({...errors, email:"Cannot be empty"  });
    } 
    if (typeof forminput["email"] !== "undefined") {
      let lastAtPos = forminput["email"].lastIndexOf("@");
      let lastDotPos = forminput["email"].lastIndexOf(".");

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          forminput["email"].indexOf("@@") == -1 &&
          lastDotPos > 2 &&
          forminput["email"].length - lastDotPos > 2
        )
      ) {
        setFormIsValid(false)
        setErrors({...errors, email:"Email is not valid" }) ;
      }
    }
    console.log(forminput["password"].length)
    if (forminput["password"].length < 8) {
      setFormIsValid(false)
      setErrors({...errors ,  password: " should be at least 8 char"});
    }

    return formIsValid;
  }

  useEffect(()=>{
    handleValidation()
  }, [forminput])
  
  const handleSignUp = (e:React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
   
    const validate =handleValidation()
    console.log(validate)
    if(validate){
      setSubmit(true)
      axios.post("https://befunded.herokuapp.com/signup", {...forminput, role } ).then(res => {
        console.log(res)
        const resp = res.data
        setUser(resp.user)
        setToken(resp.token)
        navigate('/verify');
      }).catch(err =>{
        console.log(err)
      })
    }else{
      console.log(errors)
    }
  }
  
  return (
    <div className='signIn'>
     <Header/> 

      <div className="signIn__container">
        <h1 className='signIn__header'>Create Account</h1>

        <div className="signIn__option">
          <div onClick={()=> setRole("enterpreneur")} className={role =="enterpreneur" ? 'signIn__optionButton  SO_active' : "signIn__optionButton"}>
            <h3>Enterpreneur</h3>
            <p>Get Funded for Your Ideas</p>
          </div>

          <div onClick={()=> setRole("investor")} className={role =="investor" ? 'signIn__optionButton  SO_active' : "signIn__optionButton"}>
            <h3>Investors</h3>
            <p>Fund Amazing Ideas and get equity</p>
          </div>
        </div>
      
        <form className='signIn__form' onSubmit={handleSignUp}>
          <div className="form_field">
            <label htmlFor="name">Name</label>
          {!formIsValid
          &&
            <small  className='inputerrors'>{errors.name}</small>
            }
            <input 
              type="text" 
              placeholder='Name'
              value={forminput.name}
              onChange={(e) => setForminput({...forminput, name: e.target.value})}
            />
          </div>

          <div className="form_field">
            <label htmlFor="email">Email Address</label>
            {!formIsValid
          &&
            <small  className='inputerrors'>{errors.email}</small>
          }
            <input 
              type="email" 
              placeholder='Personal or Business Address'
              value={forminput.email}
              onChange={(e) => setForminput({...forminput, email: e.target.value})}          />
          </div>

          <div className="form_field signUp__password">
            <label htmlFor="password">Password</label>
            {!formIsValid
          &&
              <small  className='inputerrors'>{errors.password}</small>
          }
            <input 
              type={showPassword ? "text" : "password"} 
              placeholder='********'
              minLength={8}
              value={forminput.password}
              onChange={(e) => setForminput({...forminput, password: e.target.value})}            />
            {
              showPassword ? 
                <AiOutlineEye className='signUp__passwordIcon' onClick={() =>setShowPassword(!showPassword)}/>  : 
                <AiOutlineEyeInvisible className='signUp__passwordIcon'onClick={() =>setShowPassword(!showPassword)}/>
            }
          </div>

          <button className='signIn__formButton'>{(formIsValid  && submit )  ?"Loading ...": 'Create Account' }</button>

          <div className="signIn__question">
            <p>Already have an account? <Link to={'/login'} style={{ textDecoration: "none", fontWeight: "bold", color: "#132CAD"}}>Log in</Link> </p>
          </div>

          <button className="signIn__google">Sign up with Google</button>
        </form>
      </div>
    </div>
  )
}

export default Signup