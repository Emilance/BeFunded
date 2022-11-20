
import { useState,  useEffect } from "react";
import {BiHomeAlt, BiWallet}  from "react-icons/bi"
import {FaQuestion}  from "react-icons/fa"
import {FiSettings}  from  "react-icons/fi"
import {AiOutlineDown, AiOutlineLeft}  from "react-icons/ai"
import './Dashboard.css'
import Upperdash from "./Upperdash"
import Lowerdash from "./Lowerdash"
import Wallet from "./Wallet"
import { Link } from "react-router-dom";
import {BsPerson} from "react-icons/bs"
import  {BiLogOut} from "react-icons/bi"
import ProfileBar from "./DashboardHeader";
import {GiHamburgerMenu}  from "react-icons/gi"
import {ImCross} from "react-icons/im"
import { getToken } from "../../../auth";
import axios from "axios";
import AOS from 'aos';
import 'aos/dist/aos.css';



type userType = {
    name :string,
    email: string,
    role:string,
 wallet_balance: number,
}
const Idashboard = ({user}: any) => {
    const [openBugger, setOpenBugger] = useState(false)
  
    const [headerDropdown, setHeaderDropDown]  = useState(false)
    const [active, setActive] = useState<string>("dashboard")
    const [product, setProduct] = useState<any[]>([])
    const varToken = getToken()

        useEffect(()=>{
            AOS.init( {duration:500});
        axios.get(`https://befunded.herokuapp.com/products/all`,  {
        headers: {
            Authorization: 'Bearer ' + varToken
            }
        }).then(res => {
            console.log(res.data)
            setProduct(res.data)
        }).catch(err => {
        console.log(err)
        })
      
        }, [])
   
    const tabClick =(key: string)=>{
        setActive(key)
    }
    const open = <ImCross
    onClick={()=> setOpenBugger(false)}
       size="1.5rem" className="bugger" />
const close =<GiHamburgerMenu 
       onClick={()=> setOpenBugger(true)}
        size="1.7rem" className="bugger" />
    
    return ( 
        <div className="idash">
            <div className="dsidebar">
            <Link to="/">
            <h1 className="title">Be<span>Funded</span></h1>
            </Link>
                <div className="dmenu">
                    <div  onClick={()=> tabClick("dashboard")} className={active == "dashboard" ? "singlei  singlei-active" : "singlei"}>
                        <BiHomeAlt  className="dicon" size="1rem"/>
                        <p>Dashboard</p>
                    </div>
                    <div onClick={()=> tabClick("wallet")} className={active == "wallet" ? "singlei  singlei-active" : "singlei"} >
                        <BiWallet  className="dicon" size="1rem"/>
                        <p>Wallet</p>
                    </div>
                    <div onClick={()=> tabClick("faq")} className={active == "faq" ? "singlei  singlei-active" : "singlei"}>
                        <FaQuestion  className="dicon" size="1rem"/>
                        <p>FAQ</p>
                    </div>
                    <div onClick={()=> tabClick("setting")}  className={active == "settings" ? "singlei  singlei-active" : "singlei"}>
                        <FiSettings className="dicon" size="1rem"/>
                        <p>Setting</p>
                    </div>
                </div>
            </div>
            <div className="dash">
            <div className="dashheader">

            <div className="logo  onlymobile">
               {openBugger ? open : close}
               <Link to="/">
                   <h1 className="title">Be<span>Funded</span></h1>
               </Link>
            </div>
            <ProfileBar user={user} />
            </div>
            {openBugger   &&
            
            
            
           <nav data-aos="fade-right" className="mobileNav">
                <>
                <div  onClick={()=>{ setOpenBugger(false)
                             tabClick("dashboard")}} className={active == "dashboard" ? "singlei  singlei-active" : "singlei"}>
                        <BiHomeAlt  className="dicon" size="1rem"/>
                        <p>Dashboard</p>
                    </div>
                    <div onClick={()=>{setOpenBugger(false) 
                                   tabClick("wallet")}} className={active == "wallet" ? "singlei  singlei-active" : "singlei"} >
                        <BiWallet  className="dicon" size="1rem"/>
                        <p>Wallet</p>
                    </div>
                    <div onClick={()=> {setOpenBugger(false)
                                 tabClick("faq")}} className={active == "faq" ? "singlei  singlei-active" : "singlei"}>
                        <FaQuestion  className="dicon" size="1rem"/>
                        <p>FAQ</p>
                    </div>
                    <div onClick={()=>{setOpenBugger(false) 
                    tabClick("setting") }}  className={active == "settings" ? "singlei  singlei-active" : "singlei"}>
                        <FiSettings className="dicon" size="1rem"/>
                        <p>Setting</p>
                    </div>
                </>
                
                
            </nav>
            }
              <div className="dheader">
                   <ProfileBar   user={user}/>
                </div>
                {active =="wallet" &&
                <Wallet  user={user}/>   
                }
                {active == "dashboard"  &&
                
                <>
                  <Upperdash   name={user.name}/>
                 <Lowerdash  product={product}/> 
                </>}
            </div>
        </div>
     );
}
 
export default Idashboard;