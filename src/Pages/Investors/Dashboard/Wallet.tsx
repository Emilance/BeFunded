import { useState } from "react";
import FundWallet from "./FundWallet";
import "./wallet.css"
import WithdrawFund from "./WithdrawFund";
const Wallet = ({user}:any) => {
    const [fund, setFund] = useState<string>("wallet")
    return ( 
        <div className="wallet">
        {fund == "wallet" &&
        <>
            <div className="welcome">
                <h1>Wallet</h1>
            </div>
            <div className="walleta">
                <div className="left">

                 <p>Total Funds</p>
                 <h1>${user.wallet_balance}</h1>
                 <p className="black">Amount saved for investment</p>
                </div>
                <div className="right">
                    <h4>3 Investment</h4>
                    <button  onClick={()=>setFund("fund")}>Fund</button>
                    <button onClick={()=>setFund("withdraw")}>withdraw</button>
                </div>
            </div> 
            <h2>Funded Project</h2>
            <div className="investedproject">
                <img src="/project1.png"/>
                <div className="ipdetails">
                  
                    <div className="topde">
                        <h3>Colouring Pen</h3>
                      {user.role !="investor"   &&      
                        <h4 className="green">Edit Investment</h4>
                      }
                    </div>
                    <div className="topde">
                        <p>By <span>Peter Emmanuel</span></p>
                        {user.role !="investor"   &&      
                        <h4 className="red">Delete Investment</h4>
                      }

                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates veritatis quisquam eaque molestias assumenda quasi.</p>
                    <div className="itop">

                                <div className="wcon darkblue">
                                    <p>Investment</p>
                                    <h3>$80 000</h3>
                                </div>
                                <div className="wcon racon darkblue">
                                    <p>Returns</p>
                                    <h3 className="green">$100, 000</h3>
                               </div>
                  
                    </div>
                </div>
            </div>
        </>
        }


     {fund == "fund"
     &&
     <FundWallet/>
     }

     {fund =="withdraw"
     
     && 
        <WithdrawFund/>
     }




        </div>
     );
}
 
export default Wallet;