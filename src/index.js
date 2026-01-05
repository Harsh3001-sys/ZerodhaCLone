import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './index.css';
import HomePage from './landing_page/home/HomePage';
import Signup from './landing_page/signup/SignUp';
import About from './landing_page/about/About';
import ProductPage from './landing_page/product/ProductPage';
import Pricing from './landing_page/pricing/Pricing';
import Support from './landing_page/support/Support';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import NoPageFound from './landing_page/noPageFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/signup" element={<Signup />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/products" element={<ProductPage />}/>
      <Route path="/pricing" element={<Pricing />}/>
      <Route path="/support" element={<Support />}/>
      <Route path="*" element={<NoPageFound />}/>
    </Routes>
  <Footer />
  </BrowserRouter>
);
