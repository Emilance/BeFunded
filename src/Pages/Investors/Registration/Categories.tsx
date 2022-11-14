import "./Registration.css"
const categories = ["Digital Product", "physical product", "fintech", "Ecommerce", "web3", "health", "real estate","fitness"]
const SelectCategory = ({setShowForm}: any) => {
    return ( 
        <>
            <h1>Choose Category</h1>
            <p>Choose categories of products you would like to invest in. This helps with recommendations.</p>
             <h4>Step 3 of 3</h4>
           

             <div className="form3">
                {categories.map((data, i)=> {
                    return(
                        <div className="categoryBox">
                          {data}
                        </div>
                    )
                })}
             <button >Done</button>
             </div>
           
        </>
     );
}
 
export default SelectCategory;