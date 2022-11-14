import React from 'react';
import logo from './logo.svg';
import './App.css'
import { Routes, Route } from 'react-router-dom'

import Signup from './Pages/SignUp/Signup';
import Dashboard from './Pages/EDashboard/EDashboard';
import Verify from './Pages/Verify/Verify';
import Home from './Pages/Home/Home';
import Footer from './component/footer/Footer';
import Project from './Pages/Project/Project';
import SignIn from './Pages/SignIn/SignIn';
import Idashboard from './Pages/Investors/Dashboard/Dashboard';
import Invest from './Pages/Investors/invest/Invest';
import EDashboard from './Pages/EDashboard/EDashboard';
import WalletPage from './Pages/EDashboard/WalletPage/WalletPage';
import MediaPage from './Pages/EDashboard/MediaPage/MediaPage';
import SettingPage from './Pages/EDashboard/SettingPage/SettingPage';
import ProductPage from './Pages/EDashboard/ProductPage/ProductPage';
import EMainPage from './Pages/EDashboard/EMainPage/EMainPage';
import ProductReg from './Pages/EDashboard/ProductReg/ProductReg';

import ProductReg2 from './Pages/EDashboard/ProductReg/ProductReg2';


import  { getUser } from './auth';
import {useState, useEffect} from "react"
import { userInfo } from 'os';
import NotFound from './Pages/NotFound/NotFound';
import ProductReg3 from './Pages/EDashboard/ProductReg/ProductReg3';
import ProductReg4 from './Pages/EDashboard/ProductReg/ProductReg4';


function App() {
  const [user, setUser] = useState(null  || {})
  useEffect(() => {
    const userInfo =  getUser()
     setUser({...user, name :userInfo.name,
       email: userInfo.email, role:userInfo.role,
       wallet_balance: userInfo.wallet_balance
      })
    }, [])
   
    const userI =  getUser()

  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signUp' element={<Signup />} />
        <Route path='/project' element={<Project />} />
        <Route path='/verify' element={<Verify />}/>
        <Route path='/login' element={<SignIn/>} />
        {userI.name   ?
        <Route path='/idashboard' element={<Idashboard  user={user}/>} />
        :  
        <Route path='/idashboard' element={   <h1>Loading...... refresh page or log in</h1>} />
     
        }
        <Route path='/invest' element={<Invest/>} />
        <Route path='/dashboard' element={< EDashboard/>}>
          <Route path='wallet' element={<WalletPage />}/>
          <Route path='media' element={<MediaPage />}/>
          <Route path='settings' element={<SettingPage />}/>
          <Route path='products' element={<ProductPage />}/>
          <Route path='productsreg' element={<ProductReg />} />
          <Route path='productsreg2' element={<ProductReg2 />} />
          <Route path='productsreg' element={<ProductReg />}/>
          <Route path='productsreg3' element={<ProductReg3 />}/>
          <Route path='productsreg4' element={<ProductReg4 />}/>

        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
     
    </div>
  );
}

export default App;
