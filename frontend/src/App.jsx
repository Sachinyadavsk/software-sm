import React from 'react';
import './index.css';
import Navbar from './component/layout/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './component/pages/Home.jsx';
import About from './component/pages/About.jsx';
import Service from './component/pages/Service.jsx';
import Contact from './component/pages/Contact.jsx';
import Login from './component/auth/Login.jsx';
import Signup from './component/auth/Signup.jsx'
import Footer from './component/layout/Footer.jsx';


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/service' element={<Service/>} />
        <Route path='/Contact' element={<Contact/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
