

import {BiHomeAlt, BiWallet}  from "react-icons/bi"
import {FaQuestion}  from "react-icons/fa"
import {FiSettings}  from  "react-icons/fi"
import {AiOutlineDown}  from "react-icons/ai"
import './Dashboard.css'
import Upperdash from "./Upperdash"
import Lowerdash from "./Lowerdash"
const Idashboard = () => {
    return ( 
        <div className="idash">
            <div className="dsidebar">
            <h1 className="title">Be<span>Funded</span></h1>

                <div className="dmenu">
                    <div className="singlei singlei-active">
                        <BiHomeAlt  className="dicon" size="1rem"/>
                        <p>Dashboard</p>
                    </div>
                    <div className="singlei">
                        <BiWallet  className="dicon" size="1rem"/>
                        <p>Wallet</p>
                    </div>
                    <div className="singlei">
                        <FaQuestion  className="dicon" size="1rem"/>
                        <p>Setting</p>
                    </div>
                    <div className="singlei">
                        <FiSettings  className="dicon" size="1rem"/>
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
                 <Upperdash/>
                 <Lowerdash/>
            </div>
        </div>
     );
}
 
export default Idashboard;