import React from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "./Header";
import '../style/css/App.css'
import { HomeCover } from "./HomeCover";
import { Footer } from "./Footer";
import { Awards } from "./Awards";
import { MissionVision } from "./MissionVision";
import { Header2 } from './Header2'
import { ContactUs } from "./ContactUs";
import {NovaStrana} from './NovaStrana'


// import 'bootstrap/dist/css/bootstrap.min.css';


export function App() {

  return (
    <div className="page-container">


      <Header2 />
      <Routes >
        <Route path="/" element={<HomeCover />} />
        <Route path="/awards" element={<Awards />} />
        <Route path="/contact" element={<ContactUs />} />
 
        {/* <Route path="/nova" element={<NovaStrana />} /> */}
      </Routes>

     <Footer/>
    </div>
  )
}