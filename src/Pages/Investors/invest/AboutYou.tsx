import { useState } from "react";


const AboutYou = () => {
    const [open, setOpen] = useState(false)
    const clickHandler =()=>{
        setOpen(!open)
    }
    return ( 
      <>
                <div onClick={clickHandler} className="tabcon" >
                    <div className="rtabcon">
                        <p>Step 3 of 7</p>
                        <h3>About You</h3>
                    </div>

                    <h3 className="ramount">-------</h3>
                </div>
                {open  &&
                
            <div className="rform">
             <div className="doublefield">
             <div className="field">
                <label>First Name</label>
                <input  type="text"  placeholder="$50 000"/>            
             </div><div className="field">
                <label>Last Name</label>
                <input  type="text"  placeholder="$50 000"/>            
             </div>
             </div>
             <div className="field">
                <label>Residential Area</label>
                <input  type="text"  placeholder="$50 000"/>            
             </div>
             <div className="doublefield">
             <div className="field">
                <label>City/Country</label>
                <input  type="text"  placeholder="$50 000"/>            
             </div><div className="field">
                <label>Postal Code</label>
                <input  type="text"  placeholder="$50 000"/>            
             </div>
             </div>
             <div className="field">
                <label>Phone</label>
                <input  type="text"  placeholder="$50 000"/>            
             </div>
            <div className="checkcon">
                <input type={"checkbox"} />
                <p>I agree to share my contact to company I invested in</p>
            </div>
            <div className="checkcon">
                <input type={"checkbox"} />
                <p>I certify that I am Myself and no one else is investing on my behalf</p>
            </div>
            <button className="fbtn">Next</button>
        </div>
                }
        <hr/>
      </>
 
     );
}
 
export default AboutYou;