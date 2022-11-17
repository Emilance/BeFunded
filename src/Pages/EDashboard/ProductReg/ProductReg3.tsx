import React from 'react'
import './ProductReg3.css';
import { useNavigate } from 'react-router-dom';

const ProductReg3 = ({setRegProduct, product, setProduct}:any) => {
    const navigate = useNavigate();

  return (
     <div className='productReg3'>
        <div className="backbtn" onClick={() => setRegProduct(2)}>
        <p >Back</p>
        </div>
        <h1 className="productReg3__heading">List Your Product</h1>
        <p className="productReg3__motto">Ready to get Funded, Enter your Product Information</p>

        <p className="productReg3__step">Step 3 of 4</p>

        <div className="productReg3__form">
          <div className="productReg3__inputDiv">
            <label htmlFor="investment-amount">Investment Amount</label>
            <input type="text" id='investment-amount' 
            placeholder='$'
            value={product.investment_amount}
            onChange={(e)=> setProduct({...product, investment_amount: e.target.value})}
            />
          </div>

          <div className="productReg3__inputDiv">
            <label htmlFor="investment-amount">Number of investores</label>
            <select  
              value={product.total_investor}
              onChange={(e)=> setProduct({...product, total_investor: e.target.value})}
            >
                <option value="one">1</option>
                <option value="two">2</option>
                <option value="three">3</option>
                <option value="four">4</option>
            </select>
          </div>                

          <div className="productReg3__inputDiv">
            <label htmlFor="amount-per-investor">Amount Per Investor</label>
            <input type="text" id='amount-per-investor'
              value={product.amount_per_investors}
              onChange={(e)=> setProduct({...product, amount_per_investors: e.target.value})}
            placeholder='$'/>
          </div>

          <div className="productReg3__inputDiv">
            <label htmlFor="equity-per-investor">Equity per Investor</label>
            <input type="text" id='equity-per-investor' 
            placeholder='$'
            value={product.equity_per_investors}
            onChange={(e)=> setProduct({...product,  equity_per_investors: e.target.value})}
            />
          </div>

          <div className="productReg3__nextButton" onClick={() => setRegProduct(4)}>Next</div>
        </div>
    </div>
  )
}

export default ProductReg3