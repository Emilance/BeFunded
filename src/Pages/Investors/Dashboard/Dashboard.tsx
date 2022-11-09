
import { useState } from "react";
import {BiHomeAlt, BiWallet}  from "react-icons/bi"
import {FaQuestion}  from "react-icons/fa"
import {FiSettings}  from  "react-icons/fi"
import {AiOutlineDown}  from "react-icons/ai"
import './Dashboard.css'
import Upperdash from "./Upperdash"
import Lowerdash from "./Lowerdash"
import Wallet from "./Wallet"
const Idashboard = () => {
    const [active, setActive] = useState<string>("dashboard")
    const tabClick =(key: string)=>{
        setActive(key)
    }
    return ( 
        <div className="idash">
            <div className="dsidebar">
            <h1 className="title">Be<span>Funded</span></h1>

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
                    <div className="profilebar">
                        <img src="/profile.png"  alt=""/>
                        <p>Boluwatife</p>
                        <AiOutlineDown className="picon" size="1.2rem"/>
                    </div>
                </div>
                {active =="wallet" &&
                <Wallet/>   
                }
                {active == "dashboard"  &&
                
                <>
                  <Upperdash/>
                 <Lowerdash/> 
                </>}
            </div>
        </div>
     );
}
 
export default Idashboard;