

const WithdrawFund = () => {
    return ( 
        <>
        <div className="welcome">
                   <h1>Fund</h1>
               </div>
             <div className="fundWallet">
                  
                   <div className="FW_main">
                   <div className="field fundfield">
                           <label>Bank</label>
                           <select >
                                <option value=""></option>
                            </select>            
                   </div> 
                   <div className="field fundfield">
                           <label>Account Number</label>
                           <input  type="text"  placeholder="$50 000"/>            
                  </div>
                 
                   <div className="field fundfield">
                           <label>Amount</label>
                           <input  type="text"  placeholder="$50 000"/>            
                   </div>

                   <div className="field fundfield">
                           <label>Withdrawal Password</label>
                           <input  type="text"  placeholder="$50 000"/>            
                   </div> 
                 
                   <button>Proceed Payments</button>
                   </div>
               </div>
        </>
     );
}
 
export default WithdrawFund;