import { useState } from "react";




const YourInvestment = () => {
    const [open, setOpen] = useState(false)
    const clickHandler =()=>{
        setOpen(!open)
    }
    return ( 
        <>
        <div onClick={clickHandler} className="tabcon">
            <div className="rtabcon">
                 <p>Step 1 of 7</p>
                 <h3>Your Investment</h3>
            </div>

            <h3 className="amounti">$50, 000</h3>
        </div>
        {open  &&
        
    <div className="rform">
        <div className=" itop"  >                                                                                                                                            "
           <div className="acon">
                 <p>Minimum Investment</p>
                 <h3>$ 50 000</h3>
            </div>
            <div className="acon racon">
                 <p>Amount In Wallet</p>
                 <h3>$ 100, 000</h3>
            </div>
        </div>
        <div className="field">
            <label>Name</label>
            <input  type="text"  placeholder="$50 000"/>            
       </div>
       <button className="fbtn">Next</button>
     </div>
     }
     <hr/>
 </>
     );
}
 
export default YourInvestment;