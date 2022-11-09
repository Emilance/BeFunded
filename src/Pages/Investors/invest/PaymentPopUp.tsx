import { useState } from "react";
import  "./payment.css"
const PaymentPopUp = () => {
    const [paymentConfirm, setPaymentConfirm] = useState(true)
    const  clickHandler =()=>{
        
    }
    return (
        <div className="popup">
        {
        paymentConfirm ?
            <div className="confirmpayment max">
                
                 <h3>Confirm Payment</h3>
                 <p>A sum of <span> $50, 010</span> will be deducted from your BeFunded wallet as payment for <span>E- Vamp Investment</span></p>
                 <div className="cbtncon">
                    <button className="btn">Cancel</button>
                    <button onClick={() => setPaymentConfirm(false)} className="btn btnc">Confirm</button>

                 </div>
            </div>

       :
            <div className="confirmpayment">
                <h3>An OTP as been sent</h3>
                <p>A one time password has been sent to your registerd emaill and phone number.</p>
                <h4>bolu**********@gmail.com</h4>
                <h4>070^^^^^^^^^^276 </h4>
                <div className="field">
                        <label>Enter OTP</label>
                        <input  type="text"  placeholder=""/>            
                </div>
                <div className="cbtncon">
                    <button className="btn">Resend</button>
                    <button className="btn btnc">Confirm</button>

                 </div>
            </div>
}
        </div>
     );
}
 
export default PaymentPopUp;