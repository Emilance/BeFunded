import AboutP from "./AboutP";
import Videosection from "./Videosection";
import "./Project.css"
import Details from "./Details";
import Header from "../../component/header/Header";
import Footer from "../../component/footer/Footer";
import { useParams } from "react-router-dom";
import axios from "axios";
import React, { useState, useEffect } from 'react';
import { getToken } from "../../auth";



const Project = () => {
    const {productId} = useParams();
    const [product, setProduct] = useState({})
    const varToken = getToken()
  useEffect(()=>{

      axios.get(`https://befunded.herokuapp.com/product/${productId}`,  {
          headers: {
              Authorization: 'Bearer ' + varToken
            }
      }).then(res => {
            console.log(res.data)
            setProduct(res.data)
      }).catch(err => {
        console.log(err)
      })
  }, [productId])
    return ( 
        <div className="project">
            <Header/>
            <Videosection product={product} />
            <AboutP  product={product}/>
            <Details/>
            <Footer/>

        </div>
     );
}
 
export default Project;