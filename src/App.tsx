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


function App() {
  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signUp' element={<Signup />} />
        <Route path='/project' element={<Project />} />
        <Route path='/verify' element={<Verify />}/>
        <Route path='/login' element={<SignIn/>} />
        <Route path='/idashboard' element={<Idashboard/>} />
        <Route path='/invest' element={<Invest/>} />
        <Route path='/dashboard' element={< EDashboard/>}>
          <Route path='wallet' element={<WalletPage />}/>
          <Route path='media' element={<MediaPage />}/>
          <Route path='settings' element={<SettingPage />}/>
          <Route path='products' element={<ProductPage />}/>
          <Route path='productsreg' element={<ProductReg />}/>



        </Route>
      </Routes>
     
    </div>
  );
}

export default App;
