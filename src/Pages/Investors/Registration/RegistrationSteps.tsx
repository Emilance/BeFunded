import "./Registration.css"
import {useState}  from "react"

import InvestorType  from "./InvestmentType"
import SelectCategory from "./Categories"
import FormInput from "./FormInput"
const RegistrationSteps = () => {
    const [showForm, setShowForm] = useState<number>(1)
    return ( 
        <div className="reg_steps">
            <div className="reg_header">
                <h1 className="title">Be<span>Funded</span></h1>
            </div>
            <div className="emailVerified">
                Your Email has been Verified
            </div>
           {showForm == 1  && <InvestorType  setShowForm={setShowForm}/> }
           
           {showForm == 2  && <FormInput  setShowForm={setShowForm}/> }

           {showForm == 3  && <SelectCategory  setShowForm={setShowForm}/> }

        
        </div>
     );
}
 
export default RegistrationSteps;