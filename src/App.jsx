import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';

import Home from './pages/home';
import About from './pages/About';
import Contact from './pages/Contact';
import Policy from './pages/Policy';
import Pagenotfound from './pages/Pagenotfound';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

import Job from './pages/job';
import Study from './pages/Study';
import Visitvisa from './pages/Visitvisa';
import CountryDetails from './pages/CountryDetails';
import MarqueeText from './components/MarqueeText';
import Immigration from './pages/Immigration';
import Jobdetails from './pages/Jobdetails';
function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <MarqueeText/>

        <Routes>
        <Route path='/' element={<Home />} />
       
        <Route path='/job' element={<Job />} />
        <Route path='/study' element={<Study />} />


        <Route path='/visiting-visa' element={<Visitvisa />} />

        <Route path='/country-details/:id' element={<CountryDetails />} />
        <Route path='/job-details/:id' element={<Jobdetails />} />


        <Route path='/immigration' element={<Immigration />} />

          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/policy' element={<Policy />} />
          <Route path='*' element={<Pagenotfound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
