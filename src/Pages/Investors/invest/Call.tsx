import { useState } from "react";


const Call = () => {
    const [open, setOpen] = useState(false)
    const clickHandler =()=>{
        setOpen(!open)
    }
    return ( 
      <>
                <div onClick={clickHandler} className="tabcon" >
                    <div className="rtabcon">
                        <p>Step 5 of 7</p>
                        <h3>Schedule a Call</h3>
                    </div>

                    <h3 className="ramount">----</h3>
                </div>
                {open  &&
                
            <div className="rform">
            <p>Schedule acall with E- Vamp CEO andd Founder to learn more about the project and other investment Benefits</p>
            <div className="roipara">
            <p>1. </p>
            <p>Note: Your input so far will be stored in draft</p>   
            </div>
            <div className="roipara">
            <p>2.</p>
            <p> You will be redirected to calendly</p>   
            </div>
            
            <button className="fbtn">Schedule Call</button>
        </div>
                }
        <hr/>
      </>
 
     );
}
 
export default Call;