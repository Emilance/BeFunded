
import AboutYou from "./AboutYou";
import Call from "./Call";
import "./investform.css"
import MakePayment from "./MakePayment";
import Roi from "./Roi";
import TermsandCondition from "./TermsandCondidtion";
import YourInvestment from "./YourInvestment";

const Investform = () => {
    return ( 
        <div className="investform">
             <div className="rightformbar">
                <p>1. Your Investment</p>
                <p>2. Your ROI</p>
                <p>3. Aboutt You</p>
                <p>4. Terms and Condition</p>
                <p>5. Schedule a call</p>
                <p>6. Make Payment</p>
                <p>7. Invsestment Review</p>
              
                
            </div>
            <div className="divider"></div>
             <div className="formCon">
               <YourInvestment/>  
               <Roi/>
               <AboutYou/>
               <TermsandCondition/>
               <Call/>
               <MakePayment/>
               <div  className="tabcon" >
                    <div className="rtabcon">
                        <p>Step 7 of 7</p>
                        <h3>Review Investment</h3>
                    </div>

                    <h3 className="ramount">----</h3>
                </div>
             </div>
            </div>
     );
}
 
export default Investform;