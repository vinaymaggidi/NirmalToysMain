import React, { Component } from 'react';
import './index.css';
import StickyHeader from './components/Header/StickyHeader'
import Navbar from './components/NavBar/NavBar';
import About from './components/About/About';
import Services from './components/Services/Services.jsx';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer'

import ImageSlider from './components/Slides/ImageSlider';
import { SliderData } from './components/Slides/SliderData';


const App = () => {
    return (
        <>
            <StickyHeader/>
            <Navbar/>
            <ImageSlider slides={SliderData} />
            <About />
            <Services />
            <Contact />
            <Footer />
        </>
    )
}
 
export default App;