import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { Routes,Route,BrowserRouter } from 'react-router-dom';
import Blog from './pages/Blog';
import Footer from './components/Footer';
import Blog2 from './pages/Blog2';
import Newsletter from './pages/NewsLetter';
import ScrollToTop from './components/ScrollToTop';
import HelpAndSupport from './pages/HelpAndSupport';
import TermsAndServices from './pages/TermsAndServices';
import PrivacyAndSupport from './pages/PrivacyAndPolicy';

function App() {

  return (
    <>
      <div className='bg-white'>
        <BrowserRouter>
        <ScrollToTop/>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/blog2" element={<Blog2/>}/>
          <Route path="/newsletter" element={<Newsletter/>}/>
          <Route path= "/help-Support"element={<HelpAndSupport/>}/>
          <Route path= "/terms-services"element={<TermsAndServices/>}/>
          <Route path= "/privacy"element={<PrivacyAndSupport/>}/>
        </Routes>
        <Footer/>
        </BrowserRouter>
        
        
        
      </div>
      
    </>
  )
}

export default App
