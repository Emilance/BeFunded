import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/header/Header';
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home';
import Signup from './Pages/SignUp/Signup';
import Dashboard from './Pages/Dashboard/Dashboard';
import SignIn from './Pages/SignIn/SignIn';

function App() {
  return (
    <div className="app">
      {/* <Header/> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signUp' element={<Signup />} />
        <Route path='/login' element={<SignIn />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
