import React, { useState } from 'react'
import './SignIn.css';
import BefundedLogo from '../../assets/BeFunded.svg';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { setToken, setUser } from '../../auth';
type errorType={
  email: null | string, 
  password:null |string

}
const SignIn = () => {

  const navigate = useNavigate();
  const [role, setRole]  = useState("investor")
  const [forminput, setForminput]  = useState({email:"", password:""})
  const [errors, setErrors] = useState<errorType>({email:null, password:""})

   
  const handleValidation =() => {
    let formIsValid = true;

 
    
 
   
    //Email
    if (!forminput["email"]) {
      formIsValid = false;
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
        formIsValid = false;
        setErrors({...errors, email:"Email is not valid" }) ;
      }
    }
    console.log(forminput["password"].length)
    if (forminput["password"].length < 8) {
      formIsValid = false;
      setErrors({...errors ,  password: "password is too short"});
    }

    return formIsValid;
  }
 

  const handleSignUp = (e:React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const validate =handleValidation()
    console.log(validate)
    if(validate){

      axios.post("https://befunded.herokuapp.com/login", {...forminput, role } ).then(res => {
        console.log(res)
        const resp = res.data
        setUser(resp.user)
        setToken(resp.token)
       navigate('/idashboard');
      }).catch(err =>{
        console.log(err)
      })
    }else{
      console.log(errors)
    }
  }
  return (
    <div className='signIn'>

      <div className="signIn__logo">
        <img src={BefundedLogo} alt="befunded" />
      </div>

      <div className="signIn__container">
        <h1 className="signIn__header">Log in</h1>


        <div className="signIn__option">
        <div onClick={()=> setRole("enterpreneur")} className={role =="enterpreneur" ? 'signUp__optionButton  SO_active' : "signUp__optionButton"}>
            <h3>Enterpreneur</h3>
            <small>Get Funded for Your Ideas</small>
          </div>

          <div onClick={()=> setRole("investor")} className={role =="investor" ? 'signUp__optionButton  SO_active' : "signUp__optionButton"}>
            <h3>Investors</h3>
            <small>Fund Amazing Ideas and get equity</small>
          </div>
        </div>

        <form className="signIn__form" onSubmit={handleSignUp}>
          <div className="signIn__formDiv">
            <label htmlFor="email">Email Address</label>
            <input type="text"
             placeholder='Personal or business email address'
             onChange={(e ) => setForminput({...forminput, email : e.target.value})}
             />
          </div>

          <div className="signIn__formDiv">
            <label htmlFor="password">Password</label>
            <input type="password" placeholder='******'
              onChange={(e ) => setForminput({...forminput, password : e.target.value})}
              />
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