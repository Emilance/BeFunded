import React from 'react'
import { useState } from "react";
import './EDashboard.css';
import BeFunded from '../../assets/BeFunded.svg';
import Dashboard from '../../assets/DashboardLogo.svg';
import Settings from '../../assets/SettingsLogo.svg';
import Wallet from '../../assets/WalletLogo1.svg';
import { Outlet, useNavigate } from 'react-router-dom';
import EHeader from '../../component/EHeader/EHeader';
import ProductPage from './ProductPage/ProductPage';
import EMainPage from './EMainPage/EMainPage';
import WalletPage from './WalletPage/WalletPage';
import MediaPage from './MediaPage/MediaPage';
import ProfileBar from '../Investors/Dashboard/DashboardHeader';

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
  const tabClick =(key: string)=>{
    setActive(key)
}

  const navigate = useNavigate();

  return (
    <div className="eDashboard">
      <div className="eDashboard__sidebar">
        <img src={BeFunded} alt="befunded" className="eDashboard__img" />

        <div className="eDashboard__pages">
          {pagesOptions.map((page, i) => (
            <div  key={i} className={active == page.name ? "eDashboard__page eDashboard_page_active" : "eDashboard__page"} onClick={() => tabClick(page.name)}>
              <img src={page.picture} alt={page.name} />
              <p>{page.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="eDashboard__main">
      <div className="dheader">
                   <ProfileBar   user={user}/>
        </div>
        {active == "Products"  && <ProductPage/>}
        {active == "Dashboard"  && <EMainPage/>}
        {active == "Wallet"  && <WalletPage  user={user}/>}
        {active == "Media"  && <MediaPage/>}

      </div>
    </div>
  )
}

export default EDashboard