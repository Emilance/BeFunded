import axios from "axios";
import { type } from "os";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { isBuffer } from "util";
import { getToken, getUser } from "../../../auth";

type  amountType={
        amount:number
}
const FundWallet = () => {
     const [Amount, setAmount] = useState<amountType>({amount:0})
     const [user, setUser] = useState<any>({})
     const navigate = useNavigate();
     const varToken = getToken()
     const {amount} = Amount

        useEffect(()=>{
                const userdetails = getUser()
                setUser(userdetails)
        }, [])
        const data = {
                amount: Amount.amount,
                email :user.email
                
        }

console.log(user)
     const submitForm =(e:any)=>{
         e.preventDefault()

                axios.post("https://befunded.herokuapp.com/fund_wallet", data , {
                    headers: {
                      Authorization: 'Bearer ' + varToken
                    }
                  } ).then(res=>{
                    console.log(res)
                    const resp = res.data
                     window.location.replace(`${resp.data.payments.redirectLink}`);
                   }).catch(err=>{
                    console.log(err)
                   })
        
     }

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
                <form className="FW_main"  encType="multipart/form-data" onSubmit={submitForm}>
                <div className="field fundfield">
                        <label>Enter Amount here</label>
                        <input  type="number"
                          placeholder="$50 000"
                          value={Amount.amount}
                          onChange={(e)=> setAmount( {...Amount, amount : parseInt(e.target.value)} )}
                          />            
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
                <button  type="submit">Proceed Payments</button>
                </form>
            </div>
     </>
     );
}
 
export default FundWallet;