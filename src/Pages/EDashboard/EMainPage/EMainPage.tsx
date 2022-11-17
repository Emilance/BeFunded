import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductReg from '../ProductReg/ProductReg';
import ProductReg2 from '../ProductReg/ProductReg2';
import ProductReg3 from '../ProductReg/ProductReg3';
import ProductReg4 from '../ProductReg/ProductReg4';
import './EMainPage.css';


const productDetails = {
  product_name :"",  product_category:"", product_website: "",
  product_pitch: "", video_url: "", product_image:'', image_id: "", investment_amount: "",
  investment_raised: "", total_investors: '', amount_per_investors: '', equity_per_investors:"",
  certificate: "", certificate_id : "", company_address: "", name_of_employees : '', linkedIn:"",
  deadline:'' , owner: ''
}
const EMainPage = () => {
  const navigate = useNavigate();
  const [regProduct,  setRegProduct]= useState<null | number>(null)
  const [product, setProduct ] = useState(productDetails)


  return (
    <>
    {
      regProduct == null  &&

    <div className="eMainPage">
        <div className="eMainPage__container">
            <h2 className="eMainHeading">No Listed product Yet!</h2>
            <p className="eMainText">You do not hav any live campaigns or listed products yet. </p>
            <button   onClick={() => setRegProduct(1)}   className='eMainText__button'>Start Pitching</button>
        </div>
    </div>

    }

    {regProduct === 1 &&
       <ProductReg  setRegProduct={setRegProduct}  product={product} setProduct={setProduct}/>
    }
    {regProduct === 2 &&
       <ProductReg2  setRegProduct={setRegProduct}   product={product} setProduct={setProduct}/>
    }
    {regProduct === 3 &&
       <ProductReg3  setRegProduct={setRegProduct}  product={product} setProduct={setProduct}/>
    }
     {regProduct === 4 &&
       <ProductReg4  setRegProduct={setRegProduct}  product={product} setProduct={setProduct} />
    }
    </>
  )
}

export default EMainPage