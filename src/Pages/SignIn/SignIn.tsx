import React, { useEffect, useState } from 'react'
import './SignIn.css';
import BefundedLogo from '../../assets/BeFunded.svg';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { setToken, setUser } from '../../auth';
import LogHeader from '../../component/LogHeader';
import Header from '../../component/header/Header';
type errorType={
  email: null | string, 
  password:null |string

}
const SignIn = () => {

  const navigate = useNavigate();
  const [role, setRole]  = useState("investor")
  const [forminput, setForminput]  = useState({email:"", password:""})
  const [errors, setErrors] = useState<errorType>({email:null, password:null})
  const [formIsValid, setFormIsValid] = useState<null | boolean>(null)
  const [submit, setSubmit]= useState(false)

   
  const handleValidation = async () => {
    await setFormIsValid(true) 
 
   
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

  const handleSignUp = async (e:React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const validate = await handleValidation()
    console.log(validate)
    if(validate){

      axios.post("https://befunded.herokuapp.com/login", {...forminput, role } ).then(res => {
        setSubmit(true)
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

        <Header/>

      <div className="signIn__container">
        <h1 className="signIn__header">Log in</h1>


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

        <form className="signIn__form" onSubmit={handleSignUp}>
          <div className="form_field">
            <label htmlFor="email">Email Address</label>
            {!formIsValid
             &&
            <small  className='inputerrors'>{errors.email}</small>
             }
           <input type="text"
             placeholder='Personal or business email address'
             value = {forminput.email}
             onChange={(e) => setForminput({...forminput, email : e.target.value})}
             />
          </div>

          <div className="form_field">
            <label htmlFor="password">Password</label>
            {!formIsValid
          &&
              <small  className='inputerrors'>{errors.password}</small>
          }
            <input type="password" placeholder='******'
            value={forminput.password}
              onChange={(e ) => setForminput({...forminput, password : e.target.value})}
              />
          </div>


          <button className='signIn__formButton'>{(formIsValid && submit)  ?  "Loading ..." : 'Log in' }</button>

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