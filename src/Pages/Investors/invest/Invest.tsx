
import {AiOutlineDown} from "react-icons/ai"
import {BsArrowLeft} from "react-icons/bs"
import "./Invest.css"
import Investform from "./Investform";
import PaymentPopUp from "./PaymentPopUp";

const Invest = () => {
    return ( 
        <>
        <div className="investi">
            <div className="iheader">
            <div className="backarrow">
                <BsArrowLeft size="1.2rem"/>
                <p>Back to Dashboard</p>
            </div>
            <div className="iprofilebar">
                <img src="/profile.png"  alt=""/>
                <p>Boluwatife</p>
                <AiOutlineDown className="picon" size="1.2rem"/>
             </div>
            </div>
            <div className="upperinvest">

            <p  className="ititle">SEED  INVESTMENT</p>
            <h1>You want to Invest in E- Vamp</h1>
            <p>You get equity shares when you invest in E-Vamp</p>
            </div>
            <Investform/>
    
        </div>
            
        </>
     );
}
 
export default Invest;