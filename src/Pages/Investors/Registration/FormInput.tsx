

const FormInput = ({setShowForm}: any) => {
    return ( 
        <>
        <h1>Welcome Boluwatife.</h1>
        <p>Your Journey as an Investor is about to begin, please fill in the correct information so that you can have a fruitful experience</p>
         <h4>Step 2 of 3</h4>
        

         <div className="form1">
         <div className="field">
            <label>Enter Company Name</label>
            <input  type="text"  placeholder="Your name"/>            
         </div>
         <div className="field">
            <label>Enter Valid Address</label>
            <input  type="text"  placeholder="Personal or Business Address"/>            
         </div>
         <button  onClick={()=> setShowForm(3)}>Next</button>
         </div>
       
        </>
     );
}
 
export default FormInput;