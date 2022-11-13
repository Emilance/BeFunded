import React from 'react'
import './ProductPage.css';
import { useNavigate } from 'react-router-dom';

const ProductPage = () => {
  const navigate = useNavigate();
  return (
    <div className="productPage">
      <div className="productPage__container">
          <h2 className="productHeading">No Listed product Yet!</h2>
          <p className="productText">You do not hav any live campaigns or listed products yet. </p>
          <button className='productText__button' onClick={() => navigate('/productsreg')}>Start Pitching</button>
      </div>
    </div>
  )
}

export default ProductPage