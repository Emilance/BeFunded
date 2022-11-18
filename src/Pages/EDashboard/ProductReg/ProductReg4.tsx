import React from 'react'
import './ProductReg4.css';
import { useNavigate } from 'react-router-dom';
import {MdOutlineKeyboardBackspace}  from "react-icons/md"



const ProductReg4 = ({setRegProduct, product, setProduct, submitForm}: any) => {
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
        name='image'
        onChange={(e)=> setProduct({...product, certificate: e.target.files })}
        />
      </div>

      <div className="productReg4__inputDiv">
        <label htmlFor="company-address">Company Address</label>
        <input type="text" id='company-address' 
        placeholder='Enter Address here'
        name='company_address'
        value={product.company_address}
        onChange={(e)=> setProduct({...product, companyaddress: e.target.value})}
        
        />
      </div>

      <div className="productReg4__inputDiv">
        <label>Number of Employees</label>
        <select
              name='number_of_employees'
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
         name='linkedIn'
         value={product.linkedIn}
         onChange={(e)=> setProduct({...product, linkedIn: e.target.value})}
         />
      </div>

      <div className="checkbox-termsAndCondition">
        <input type="checkbox" />
         <span>I have read and agree to BeFundeds Terms and Condiions</span>
      </div>

      <input type='submit' className="productReg4__nextButton"/>Start Campaign</div>
   
</div>
  )
}

export default ProductReg4