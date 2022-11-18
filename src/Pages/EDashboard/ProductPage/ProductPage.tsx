import React from 'react'
import './ProductPage.css';
import { useNavigate } from 'react-router-dom';

const ProductPage = ({product}: any) => {
  const navigate = useNavigate();

  return (
    <div className="productPage">
      {product  &&  product.map((data: any, i:any)=> {
        return (


       <div className="investedproject" key={i}>
                <img src={data.product_image}/>
                <div className="ipdetails">
                  
                    <div className="topde">
                        <h3>{data.product_name}</h3>
                        <h4 className="green">Edit Investment</h4>
                    </div>
                    <div className="topde">
                        <p>By <span>Peter Emmanuel</span></p>
                        <h4 className="red">Delete Investment</h4>

                    </div>
                    <p>{data.product_pitch.slice(0 , 95)}...</p>
                    <div className="itop">

                                <div className="wcon darkblue">
                                    <p>Investment</p>
                                    <h3>{`$${data.investment_amount}`}</h3>
                                </div>
                                <div className="wcon racon darkblue">
                                    <p>Returns</p>
                                    <h3 className="green">{`$${data.equity_per_investors}`}</h3>
                               </div>
                  
                    </div>
                </div>
          </div>
        )
      })}

         
    </div>
  )
}

export default ProductPage