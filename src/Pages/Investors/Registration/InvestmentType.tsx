import React from "react";

const InvestorType = ({setShowForm}:any) => {
    return ( 
        <>

          <h1>Welcome Boluwatife.</h1>
            <p>Your Journey as an Investor is about to begin, please fill in the correct information so that you can have a fruitful experience</p>
             <h4>Step 1 of 3</h4>
             <div className="form1">
                <h2>I want to invest as</h2>
              
                <label onClick={() => setShowForm(2)} htmlFor="individual" className="selecttab">
                    <input name="investas" id="individual" type="checkbox" 
                        value="An Individual"
                    />
                    <div className="label">
                        <h3>An Individual</h3>
                        <p>I am an angel Investor</p>
                    </div>
                    
                </label>
                <label  onClick={() => setShowForm(2)} htmlFor="company" className="selecttab">
                    <input name="investas" id="company" type="checkbox"
                    value="A Vanture Capital"
                    />
                    <div className="label">
                        <h3>A Venture Capital</h3>
                        <p>I am a company looking to fund startups</p>
                    </div>
                    
                </label>
        </div>
        </>
                
             
            
      
     );
}
 
export default InvestorType;