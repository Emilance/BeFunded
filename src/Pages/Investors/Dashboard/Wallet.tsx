import { useState } from "react";
import "./wallet.css"
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
                    <button>withdraw</button>
                </div>
            </div> 
            <h2>Funded Project</h2>
            <div className="investedproject">
                <img src="/project1.png"/>
                <div className="ipdetails">
                  
                    <div className="topde">
                        <h3>Colouring Pen</h3>
                        <h4 className="green">Edit Investment</h4>
                    </div>
                    <div className="topde">
                        <p>By <span>Peter Emmanuel</span></p>
                        <h4 className="red">Delete Investment</h4>

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
     <>
     <div className="welcome">
                <h1>Fund</h1>
            </div>
          <div className="fundWallet">
                <div className="sidebar_FW ">
                    <h2>Payment Method</h2>
                    <div className="tabs_FW  tabs_FW_active">
                        Card Payment
                    </div>
                    <div className="tabs_FW">
                         Bank Account
                    </div>
                    <div className="tabs_FW">
                      USSD Payment
                    </div>
                    <div className="tabs_FW">
                       Mobile Bank
                    </div>           
                </div>
                <div className="FW_main">

                <div className="field fundfield">
                        <label>Enter Card Number</label>
                        <input  type="text"  placeholder="$50 000"/>            
               </div>
                <div className="field fundfield">
                        <label>Card Holder Name</label>
                        <input  type="text"  placeholder="$50 000"/>            
                </div> 
                <div className="field fundfield">
                        <label>Amount</label>
                        <input  type="text"  placeholder="$50 000"/>            
                </div>
                <div className="doublefields">
                <div className="field fundfield">
                        <label>Expiry</label>
                        <input  type="text"  placeholder="$50 000"/>            
                </div>
                <div className="field fundfield m">
                        <label>CVV</label>
                        <input  type="text"  placeholder="$50 000"/>            
                </div>
                </div>
                <button>Proceed Payments</button>
                </div>
            </div>
     </>
     }




        </div>
     );
}
 
export default Wallet;