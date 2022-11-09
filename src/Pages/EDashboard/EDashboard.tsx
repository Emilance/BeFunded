import React from 'react'
import './EDashboard.css';
import BeFunded from '../../assets/BeFunded.svg';
import Dashboard from '../../assets/DashboardLogo.svg';
import Settings from '../../assets/SettingsLogo.svg';
import Wallet from '../../assets/WalletLogo1.svg';
import { Outlet, useNavigate } from 'react-router-dom';
import EHeader from '../../component/EHeader/EHeader';

const EDashboard = () => {
  const pagesOptions = [
    {
      id: 1, 
      name: "Dashboard", 
      picture: Dashboard,
      route: '/dashboard'
    },
    {
      id: 2, 
      name: "Products",
      picture: Wallet, 
      route: '/dashboard/products'
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

  const navigate = useNavigate();

  return (
    <div className="eDashboard">
      <div className="eDashboard__sidebar">
        <img src={BeFunded} alt="befunded" className="eDashboard__img" />

        <div className="eDashboard__pages">
          {pagesOptions.map(page => (
            <div className="eDashboard__page" onClick={() => navigate(`${page.route}`)}>
              {/* () => navigate(`${items.route}`) */}
              <img src={page.picture} alt={page.name} />
              <p>{page.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="eDashboard__main">
          <EHeader />
          <Outlet />
      </div>
    </div>
  )
}

export default EDashboard