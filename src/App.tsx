import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/header/Header';
import { Routes, Route } from 'react-router-dom'

import Signup from './Pages/SignUp/Signup';
import Dashboard from './Pages/Dashboard/Dashboard';
import Home from './Pages/Home/Home';


function App() {
  return (
    <div className="app">
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signUp' element={<Signup />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
