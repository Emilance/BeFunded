import { useState } from "react";
import PaymentPopUp from "./PaymentPopUp";




const MakePayment = () => {
    const [open, setOpen] = useState(false)
    const [openPopUp, setOpenPopUp ] =useState(false)
    const clickHandler =()=>{
        setOpen(!open)
    }
    return ( 
        <>
        {openPopUp
        &&
        <PaymentPopUp/>
        }
        <div onClick={clickHandler} className="tabcon">
            <div className="rtabcon">
                 <p>Step 6 of 7</p>
                 <h3>Make Payment</h3>
            </div>

            <h3 className="amounti">-----</h3>
        </div>
        {open  &&
        
    <div className="rform">
        <div className=" itop"  >                                                                                                                                            "
           <div className="acon">
                 <p>Amount In Wallet</p>
                 <h3>$ 100 000</h3>
            </div>
            <div className="acon racon">
                 <p>Transaction Fee</p>
                 <h3>$ 10 </h3>
            </div>
        </div>
        <div className="field">
            <label>Amount to Invest</label>
            <input  type="text"  placeholder="$50 000"/>            
       </div>
       <button onClick={()=> setOpenPopUp(true)} className="fbtn">Make Payment</button>
     </div>
     }
     <hr/>
     
 </>
     );
}
 
export default MakePayment;