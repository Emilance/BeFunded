import React from 'react'
import { useState, useEffect } from "react";
import './EDashboard.css';
import BeFunded from '../../assets/BeFunded.svg';
import Dashboard from '../../assets/DashboardLogo.svg';
import Settings from '../../assets/SettingsLogo.svg';
import Wallet from '../../assets/WalletLogo1.svg';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import EHeader from '../../component/EHeader/EHeader';
import ProductPage from './ProductPage/ProductPage';
import EMainPage from './EMainPage/EMainPage';
import WalletPage from './WalletPage/WalletPage';
import MediaPage from './MediaPage/MediaPage';
import ProfileBar from '../Investors/Dashboard/DashboardHeader';
// import ProfileBar from "./DashboardHeader";
import {GiHamburgerMenu}  from "react-icons/gi"
import {ImCross} from "react-icons/im"
import {BiHomeAlt, BiWallet}  from "react-icons/bi"
import {FaQuestion}  from "react-icons/fa"
import {FiSettings}  from  "react-icons/fi"
import Header from '../../component/header/Header';
import { getToken } from '../../auth';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';


const pagesOptions = [
  {
    id: 1, 
    name: "Dashboard", 
    picture: Dashboard,
    route: '/dashboard',
   
  },
  {
    id: 2, 
    name: "Products",
    picture: Wallet, 
    route: '/dashboard/products',
   
  },
  {
    id: 3, 
    name: "Wallet", 
    picture: Wallet, 
    route: '/dashboard/wallet'
  },
  {
    id: 4, 
    name: "Media",
    picture: Wallet, 
    route: '/dashboard/media'
  },
  {
    id: 5, 
    name: "Settings", 
    picture: Settings,
    route: '/dashboard/settings'
  }
]

const EDashboard = ({user}: any) => {
  const [active, setActive] = useState<string>("Dashboard")
  const [openBugger, setOpenBugger] = useState(false)

  const tabClick =(key: string)=>{
    setActive(key)
}
      const open = <ImCross
      onClick={()=> setOpenBugger(false)}
        size="1.5rem" className="bugger" />
      const close =<GiHamburgerMenu 
        onClick={()=> setOpenBugger(true)}
          size="1.7rem" className="bugger" />
        const navigate = useNavigate();
 

        const [product, setProduct] = useState<any[]>([])
        const varToken = getToken()
      
      useEffect(()=>{
        AOS.init( {duration:500});
      axios.get(`https://befunded.herokuapp.com/product/mine`,  {
       headers: {
           Authorization: 'Bearer ' + varToken
           }
      }).then(res => {
           console.log(res.data)
           setProduct(res.data)
      }).catch(err => {
       console.log(err)
      })
    
      }, [])

         
  return (
    <div className="eDashboard">
      <div className="eDashboard__sidebar">
        <Link to="/">

        <img src={BeFunded} alt="befunded" className="eDashboard__img" />
        </Link>

        <div className="eDashboard__pages">
          {pagesOptions.map((page, i) => (
            <div  key={i} className={active == page.name ? "eDashboard__page eDashboard_page_active" : "eDashboard__page"} onClick={() => tabClick(page.name)}>
              <img src={page.picture} alt={page.name} />
              <p>{page.name}</p>
            </div>
          ))}
        </div>
      </div>
   <div  className='edashboardpage'>
          <div className="dashheader">

            <div className="logo  onlymobile">
              {openBugger ? open : close}
            <h1 className="title">Be<span>Funded</span></h1>
            </div>
            <ProfileBar user={user} />
        </div>
      {openBugger   &&
            
            
            
            <nav data-aos="fade-right"  className="mobileNav">
                 <>
                 <div  onClick={()=>{
                   setOpenBugger(false)
                  tabClick("Dashboard")}} className={active == "dashboard" ? "singlei  singlei-active" : "singlei"}>
                         <BiHomeAlt  className="dicon" size="1rem"/>
                         <p>Dashboard</p>
                     </div>
                     <div onClick={()=>{    setOpenBugger(false)
                      tabClick("Products")}} className={active == "wallet" ? "singlei  singlei-active" : "singlei"} >
                         <BiWallet  className="dicon" size="1rem"/>
                         <p>Products</p>
                     </div>
                     <div onClick={()=> {    setOpenBugger(false)
                     tabClick("Wallet")}} className={active == "wallet" ? "singlei  singlei-active" : "singlei"} >
                         <BiWallet  className="dicon" size="1rem"/>
                         <p>Wallet</p>
                     </div>
                     <div onClick={()=> {    setOpenBugger(false)
                     tabClick("Media")}} className={active == "faq" ? "singlei  singlei-active" : "singlei"}>
                         <FaQuestion  className="dicon" size="1rem"/>
                         <p>Media</p>
                     </div>
                     <div onClick={()=> {    setOpenBugger(false)
                     tabClick("setting")}}  className={active == "settings" ? "singlei  singlei-active" : "singlei"}>
                         <FiSettings className="dicon" size="1rem"/>
                         <p>Setting</p>
                     </div>
                 </>
                 
                 
             </nav>
             }
      <div className="eDashboard__main">
      <div className="dheader">
                   <ProfileBar   user={user}/>
        </div>
        {active == "Products"  &&
        <>
        {(product) ? 
           <ProductPage product={product}   user={user}/> 
           :
            <EMainPage/>}
        </>}
        {active == "Dashboard"  && <EMainPage/>}
        {active == "Wallet"  && <WalletPage  user={user}/>}
        {active == "Media"  && <MediaPage/>}

      </div>
   </div>
    </div>
  )
}

export default EDashboard