import React from 'react'
import './ProductReg3.css';
import { useNavigate } from 'react-router-dom';

const ProductReg3 = () => {
    const navigate = useNavigate();

  return (
     <div className='productReg3'>
        <p className="productReg3__back" onClick={() => navigate(-1)}>back</p>
        <h1 className="productReg3__heading">List Your Product</h1>
        <p className="productReg3__motto">Ready to get Funded, Enter your Product Information</p>

        <p className="productReg3__step">Step 3 of 4</p>

        <div className="productReg3__form">
          <div className="productReg3__inputDiv">
            <label htmlFor="investment-amount">Investment Amount</label>
            <input type="text" id='investment-amount' placeholder='$'/>
          </div>

          <div className="productReg3__inputDiv">
            <label htmlFor="investment-amount">Number of investores</label>
            {/* <input type="text" id='investment-amount' placeholder='$'/> */}
            <select>
                <option value="one">1</option>
                <option value="two">2</option>
                <option value="three">3</option>
                <option value="four">4</option>
            </select>
          </div>                

          <div className="productReg3__inputDiv">
            <label htmlFor="amount-per-investor">Amount Per Investor</label>
            <input type="text" id='amount-per-investor' placeholder='$'/>
          </div>

          <div className="productReg3__inputDiv">
            <label htmlFor="equity-per-investor">Equity per Investor</label>
            <input type="text" id='equity-per-investor' placeholder='$'/>
          </div>

          <div className="productReg3__nextButton" onClick={() => navigate('/dashboard/productsreg4')}>Next</div>
        </div>
    </div>
  )
}

export default ProductReg3