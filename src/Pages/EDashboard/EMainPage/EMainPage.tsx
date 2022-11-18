import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getToken } from '../../../auth';
import ProductReg from '../ProductReg/ProductReg';
import ProductReg2 from '../ProductReg/ProductReg2';
import ProductReg3 from '../ProductReg/ProductReg3';
import ProductReg4 from '../ProductReg/ProductReg4';
import './EMainPage.css';

type productType = {
  product_name :string,  product_category:string, product_website:string,
  product_pitch: string, video_url: string, product_image: null | string , image_id: string, investment_amount:string,
  investment_raised: string, total_investors: string, amount_per_investors: string, equity_per_investors:string,
  certificate:null | string, certificate_id : string, company_address: string, name_of_employees :string, linkedIn:string,
  deadline:any , owner: any
}

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


    const {product_name,   product_category, product_website,
    product_pitch, video_url, product_image, image_id, investment_amount,
    investment_raised, total_investors, amount_per_investors, equity_per_investors,
    certificate, certificate_id, company_address, name_of_employees , linkedIn,
    deadline, owner}  = product
    const varToken = getToken()
  const submitForm =async (e:React.ChangeEvent<HTMLFormElement>) => {
         e.preventDefault()
         const  data = new FormData();
  
    
         data.append("certificate", certificate[0]);
         data.append("product_image", product_image[0]);
         data.append("product_name", product_name);
         data.append("roduct_category",product_category);
         data.append("product_website", product_website);
         data.append("product_pitch", product_pitch);
         data.append("video_url", video_url);
         data.append("image_id", image_id);
         data.append("investment_amount", investment_amount);
         data.append("investment_raised", investment_raised);
         data.append("total_investors", total_investors);
         data.append("equity_per_investors", equity_per_investors);
         data.append("certificate_id", certificate_id);
         data.append("name_of_employees", name_of_employees);
         data.append(" linkedIn",  linkedIn);
         data.append("deadline", deadline);
         data.append("owner", owner);
        
           const Product= {
                product_name,   product_category, product_website,
              product_pitch, video_url,image_id, investment_amount,
              investment_raised, total_investors, amount_per_investors, equity_per_investors,
              image:certificate[0], certificate_id, name_of_employees , linkedIn,
              deadline, owner,
            product_image  : product_image[0]
           };
       
          console.log(varToken)
          axios.post("https://befunded.herokuapp.com/product/new", {...Product} , {
            headers: {
              Authorization: 'Bearer ' + varToken
            }
          } ).then(res=>{

            console.log(res)
           }).catch(err=>{
            console.log(err)
           })

           console.log(Array.from(data))
           console.log(Product)
        
  }


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

    <form encType="multipart/form-data" onSubmit={submitForm}>

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
       <ProductReg4  setRegProduct={setRegProduct}  product={product} setProduct={setProduct}  submitForm={submitForm}/>
    }
    </form>

    </>
  )
}

export default EMainPage