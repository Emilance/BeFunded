import React from 'react'
import './ProductReg.css';
import { useNavigate } from 'react-router-dom'
import {MdOutlineKeyboardBackspace}  from "react-icons/md"
const ProductReg = ({setRegProduct, product, setProduct} : any) => {
    const navigate = useNavigate();

  return (
    <div className="productReg">
        <div className="backbtn" onClick={() => setRegProduct(null)}>
         <MdOutlineKeyboardBackspace  size="1.5rem"/>
        <p >Back</p>
        </div>
        <h1 className="productReg__heading">List Your Product</h1>
        <p className="productReg__motto">Ready to get Funded, Enter your Product Information</p>

        <p className="productReg__step">Step 1 of 4</p>

        <div className='productReg__form'>
            <div className="productReg__inputDiv">
                <label htmlFor="product-name">Product Name</label>
                <input type="text" id='product-name'  name="product_name"
                 value={product.product_name}
                 onChange={(e)=> setProduct({...product, product_name: e.target.value})}
                placeholder='Name'/>
            </div>

            <div className="productReg__inputDiv">
                <label htmlFor="product-category">Product Category</label>
                <select id="product-category"  name="product_category"
                    value={product.product_category}
                    onChange={(e)=> setProduct({...product, product_category: e.target.value})}
                >
                    <option value="physical">Physical</option>
                    <option value="Digital">Digital</option>
                </select>
            </div>

            <div className="productReg__inputDiv checkbox-input">
                <div className="form__checkbox1">
                    <label htmlFor="product-type-digital">Digital</label>
                    <input type="checkbox"  id='product-type-digital' />
                </div>

                <div className="form__checkbox2">
                    <label htmlFor="product-type-physical">Physical</label>
                    <input type="checkbox" id='product-type-physical' />
                </div>
            </div>

            <div className="productReg__inputDiv">
                <label htmlFor="product-website">Product/website Link</label>
                <input type="text" id='product-website' 
                placeholder='Product Name'
                name='product_website'
                value={product.product_website}
                onChange={(e)=> setProduct({...product, product_website: e.target.value})}
                />
            </div>

            <div className="productReg__inputDiv">
                <label htmlFor="product-description">Product Pitch/Description</label>
                <textarea id='product-description' 
                placeholder='Write an elevator pitch that will get your potential investors hooked'
                value={product.product_pitch}
                name="product_pitch"
                onChange={(e)=> setProduct({...product, product_pitch: e.target.value})}
                />
            </div>

            <button className="productReg__button" onClick={() =>  setRegProduct(2)}>Next</button>
        </div>
    </div>
  )
}

export default ProductReg