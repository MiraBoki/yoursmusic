import { useState } from 'react'
import { BrowserRouter,Routes,Route,Router } from 'react-router'
import './App.css'

import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"

import HomePage from './pages/HomePage.jsx';
import GetAppPage from './pages/GetAppPage.jsx';
import PricingPage from './pages/PricingPage.jsx';
import ChartPage from './pages/ChartPage.jsx';


// import TestPage1 from './test/Test.jsx';

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/apps' element={<GetAppPage/>} />
        <Route path='/pricings' element={<PricingPage/>} />
        <Route path='/charts' element={<ChartPage/>} />
        
        {/* <Route path='/test' element={<TestPage1/>} /> */}
      </Routes>
      <Footer/>
    </>
  )
}

export default App