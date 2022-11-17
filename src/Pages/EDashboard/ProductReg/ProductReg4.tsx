import React from 'react'
import './ProductReg4.css';
import { useNavigate } from 'react-router-dom';
import {MdOutlineKeyboardBackspace}  from "react-icons/md"


const ProductReg4 = ({setRegProduct, product, setProduct}: any) => {
    const navigate = useNavigate();
  return (
    <div className='productReg4'>
      <div className="backbtn" onClick={() => setRegProduct(3)}>
      <MdOutlineKeyboardBackspace  size="1.5rem"/>
        <p >Back</p>
        </div>  
        <h1 className="productReg4__heading">List Your Product</h1>
    <p className="productReg4__motto">Ready to get Funded, Enter your Product Information</p>

    <p className="productReg4__step">Step 4 of 4</p>

    <div className="productReg4__form">
      <div className="productReg4__inputDiv">
        <label htmlFor="product-reg">Company/Product Registration</label>
        <input type="file" id='product-reg' 
        placeholder='Upload Certificate Image'
        value={product.certificate}
        onChange={(e)=> setProduct({...product, certificate: e.target.value})}
        />
      </div>

      <div className="productReg4__inputDiv">
        <label htmlFor="company-address">Company Address</label>
        <input type="text" id='company-address' 
        placeholder='Enter Address here'
        value={product.company_address}
        onChange={(e)=> setProduct({...product, companyaddress: e.target.value})}
        
        />
      </div>

      <div className="productReg4__inputDiv">
        <label>Number of Employees</label>
        <select
        
        >
            <option value="one">1</option>
            <option value="two">2</option>
            <option value="three">3</option>
            <option value="four">4</option>
        </select>
      </div>                

      <div className="productReg4__inputDiv">
        <label htmlFor="linkedin-profile">LinkedIn Profile</label>
        <input type="text" id='linkedin-profile'
         placeholder='Name'
         value={product.linkedIn}
         onChange={(e)=> setProduct({...product, linkedIn: e.target.value})}
         />
      </div>

      <div className="checkbox-termsAndCondition">
        <input type="checkbox" />
         <span>I have read and agree to BeFunded’s Terms and Condiions</span>
      </div>

      <div className="productReg4__nextButton" onClick={() => {
           console.log(product)
        alert("This is the start the campaign") }
        }>Start Campaign</div>
    </div>
</div>
  )
}

export default ProductReg4