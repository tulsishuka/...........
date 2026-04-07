import React from 'react'
import Navbar from './layouts/Navbar'
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import SignUp from "./components/SignUp";
import Product from './components/Product';
import Verify from './components/Verify';
import Login from './components/Login';
import Forgot from './components/Forgot';
const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/product" element={<Product   />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot" element={<Forgot />} />

      </Routes>
    
    </>
  )
}

export default App

