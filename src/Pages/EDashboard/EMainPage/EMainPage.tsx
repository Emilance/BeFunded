import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getToken } from '../../../auth';
import ProductReg from '../ProductReg/ProductReg';
import ProductReg2 from '../ProductReg/ProductReg2';
import ProductReg3 from '../ProductReg/ProductReg3';
import ProductReg4 from '../ProductReg/ProductReg4';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
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
  certificate: "", certificate_id : "", company_address: "", number_of_employees : '', linkedIn:"",
  deadline:'' , owner: ''
}
const EMainPage = () => {
  const navigate = useNavigate();
  const [regProduct,  setRegProduct]= useState<null | number>(null)
  const [product, setProduct ] = useState(productDetails)
  const [createErrors, setCreateError]= useState<null | string>(null)
  const [submit, setSubmit]= useState(false)

    const {product_name,   product_category, product_website,
    product_pitch, video_url, product_image, image_id, investment_amount,
    investment_raised, total_investors, amount_per_investors, equity_per_investors,
    certificate, certificate_id, company_address,  number_of_employees , linkedIn,
    deadline, owner}  = product

    useEffect(() => {
      AOS.init( {duration:500});
    }, [])
    const varToken = getToken()
  const submitForm =async (e:React.ChangeEvent<HTMLFormElement>) => {
         e.preventDefault()
         const  data = new FormData();
  
    
         data.append("product_name", product_name);
         data.append("product_category",product_category);
         data.append("image", product_image[0]);
         data.append("image", certificate[0]);
         data.append("product_website", product_website);
         data.append("product_pitch", product_pitch);
         data.append("video_url", video_url);
         data.append("image_id", image_id);
         data.append("investment_amount", investment_amount);
         data.append("investment_raised", investment_raised);
         data.append("total_investors", total_investors);
         data.append("equity_per_investors", equity_per_investors);
         data.append("amount_per_investors", amount_per_investors)
         data.append("company_address", company_address)
         data.append("certificate_id", certificate_id);
         data.append("number_of_employees", number_of_employees);
         data.append("linkedin", linkedIn);
         data.append("owner", owner);
        
           const Product= {
                product_name,   product_category, product_website,
              product_pitch, video_url,image_id, investment_amount,
              investment_raised, total_investors, amount_per_investors, equity_per_investors,
              image:certificate[0], certificate_id, number_of_employees , linkedIn,
              deadline, owner,company_address,
            product_image  : product_image[0]
           }       
        console.log(data)
          setSubmit(true)
          axios.post("https://befunded.herokuapp.com/product/new", data , {
            headers: {
              Authorization: 'Bearer ' + varToken
            }
          } ).then(res=>{
            console.log(res)
            navigate(`/project/${res.data._id}`)
           }).catch(err=>{
            console.log(err)
            setCreateError(err.response.data.message)
            setSubmit(false)
           })

          
        
  }


  return (
    <>
    {
      regProduct == null  &&

    <div className="eMainPage">
    
        <div data-aos="fade-right" className="eMainPage__container">
          {product ? 
          <>
            <h2 className="eMainHeading">Checkout Your Product or Create a New Product</h2>
            <p className="eMainText">Navigate to product to see your products</p>
          </> :
          <>
            <h2 className="eMainHeading">No Listed product Yet!</h2>
            <p className="eMainText">You do not have any live campaigns or listed products yet. </p>
          </>
          
          }
            <button   onClick={() => setRegProduct(1)}   className='eMainText__button'>Start Pitching</button>
        </div>
    </div>

    }

    <form encType="multipart/form-data" onSubmit={submitForm}>
      {createErrors   && 
          <div className='errorContainer'>
            <p>{createErrors}</p>
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
       <ProductReg4  setRegProduct={setRegProduct}  product={product} setProduct={setProduct}  submit={submit}  submitForm={submitForm}/>
    }
    </form>

    </>
  )
}

export default EMainPage