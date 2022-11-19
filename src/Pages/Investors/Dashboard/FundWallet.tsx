

const FundWallet = () => {



    return ( 
        <>
     <div className="welcome">
                <h1>wallet/fund</h1>

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
                <form className="FW_main">
                <div className="field fundfield">
                        <label>Enter Amount here</label>
                        <input  type="Number"  placeholder="$50 000"/>            
               </div>
              
                {/* <div className="field fundfield">
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
    </div>*/}
                <button>Proceed Payments</button>
                </form>
            </div>
     </>
     );
}
 
export default FundWallet;