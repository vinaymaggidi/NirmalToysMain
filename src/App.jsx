import React, { Component } from 'react';
import './index.css';
import Header from './components/Header/Header';
import Navbar from './components/NavBar/NavBar';
import About from './components/About/About';
import Services from './components/Services/Services'
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer'

const App = () => {
    return (
        <>
            <Header />
            <About />
            <Services />
            <Contact />
            <Footer />
        </>
    )
}
 
export default App;