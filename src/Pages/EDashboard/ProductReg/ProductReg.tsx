import React from 'react'
import './ProductReg.css';

const ProductReg = () => {
  return (
    <div className="productReg">
        <h1 className="productReg__heading">List Your Product</h1>
        <p className="productReg__motto">Ready to get Funded, Enter your Product Information</p>

        <form className='productReg__form'>
            <div className="productReg__inputDiv">
                <label htmlFor="product-name">Product Name</label>
                <input type="text" id='product-name' />
            </div>

            <div className="productReg__inputDiv">
                <label htmlFor="product-category">Product Category</label>
                {/* <input type="text" id='product-category' /> */}
                <select id="product-category">
                    <option value="agriculture">Agriculture</option>
                    <option value="technology">Technology</option>
                    <option value="logistics">Logistics</option>
                    <option value="consumers">Consumers</option>
                </select>
            </div>

            <div className="productReg__inputDiv checkbox-input">
                <div className="form__checkbox1">
                    <label htmlFor="product-type-digital">Digital</label>
                    <input type="checkbox" id='product-type-digital' />
                </div>

                <div className="form__checkbox2">
                    <label htmlFor="product-type-physical">Physical</label>
                    <input type="checkbox" id='product-type-physical' />
                </div>
            </div>

            <div className="productReg__inputDiv">
                <label htmlFor="product-website">Product/website Link</label>
                <input type="text" id='product-website' />
            </div>

            <div className="productReg__inputDiv">
                <label htmlFor="product-description">Product Pitch/Description</label>
                <textarea id='product-description' />
            </div>
        </form>
    </div>
  )
}

export default ProductReg