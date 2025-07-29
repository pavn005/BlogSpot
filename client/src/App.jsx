import { useState } from 'react';
import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Write from './pages/Write';
import Single from './pages/Single';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './style.scss'

import './App.css';

function App() {
  const location = useLocation();
  const hideLayoutOn = ['/login', '/register']; // Routes where Nav and Footer are hidden
  const hideLayout = hideLayoutOn.includes(location.pathname);

  return (
    <div className="app">
      <div className="container">
        {!hideLayout && <Navbar />}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/write' element={<Write />} />
          <Route path='/single' element={<Single />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
        {!hideLayout && <Footer />}
      </div>
    </div>
  );
}

export default App;
