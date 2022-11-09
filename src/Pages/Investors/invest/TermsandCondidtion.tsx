import { useState } from "react";


const TermsandCondition = () => {
    const [open, setOpen] = useState(false)
    const clickHandler =()=>{
        setOpen(!open)
    }
    return ( 
      <>
                <div onClick={clickHandler} className="tabcon" >
                    <div className="rtabcon">
                        <p>Step 4 of 7</p>
                        <h3>Terms and Condition</h3>
                    </div>

                    <h3 className="ramount">----</h3>
                </div>
                {open  &&
                
            <div className="rform">
            <p>Investment Terms</p>
            <div className="roipara">
            <p>1. </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A quod quibusdam recusandae doloribus illo minus labore numquam vel aliquam, alias, nulla non pariatur itaque, deleniti nam suscipit quaerat beatae debitis!</p>   
            </div>
            <div className="roipara">
            <p>2.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A quod quibusdam recusandae doloribus illo minus labore numquam vel aliquam, alias, nulla non pariatur itaque, deleniti nam suscipit quaerat beatae debitis!</p>   
            </div>
            <div className="roipara">
            <p>3.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A quod quibusdam recusandae doloribus illo minus labore numquam vel aliquam, alias, nulla non pariatur itaque, deleniti nam suscipit quaerat beatae debitis!</p>   
            </div>
            <div className="roipara">
            <p>4.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A quod quibusdam recusandae doloribus illo minus labore numquam vel aliquam, alias, nulla non pariatur itaque, deleniti nam suscipit quaerat beatae debitis!</p>   
            </div>

            <div className="checkcon">
                <input type={"checkbox"} />
                <p>I agree to this terms</p>
            </div>
            <button className="fbtn">Next</button>
        </div>
                }
        <hr/>
      </>
 
     );
}
 
export default TermsandCondition;