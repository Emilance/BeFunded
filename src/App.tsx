import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/header/Header';
import Home from './component/pages/home/Home';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
    </div>
  );
}

export default App;
