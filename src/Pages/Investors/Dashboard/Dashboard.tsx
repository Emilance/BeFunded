
import { useState } from "react";
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


type userType = {
    name :string,
    email: string,
    role:string,
 wallet_balance: number,
}
const Idashboard = ({user}: any) => {
    const [headerDropdown, setHeaderDropDown]  = useState(false)
    const [active, setActive] = useState<string>("dashboard")
    const tabClick =(key: string)=>{
        setActive(key)
    }
    const opendd = <AiOutlineLeft onClick={() => setHeaderDropDown(!headerDropdown)} size="1.2rem" className="picon" />


    const closedd = <AiOutlineDown onClick={() => setHeaderDropDown(!headerDropdown)} size="1.2rem" className="picon" />

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
                <div className="dheader">
                   <ProfileBar   user={user}s/>
                </div>
                {active =="wallet" &&
                <Wallet  user={user}/>   
                }
                {active == "dashboard"  &&
                
                <>
                  <Upperdash   name={user.name}/>
                 <Lowerdash/> 
                </>}
            </div>
        </div>
     );
}
 
export default Idashboard;