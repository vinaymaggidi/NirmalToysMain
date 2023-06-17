import React, { Component } from 'react';
// import Contact from '../Contact/Contact.jsx';
import Footer from '../Footer/Footer.jsx'
// import About from '../About/About.jsx';
import ImageSlider from '../Slides/ImageSlider.jsx';
import { SliderData } from '../Slides/SliderData.jsx';
// import Services from '../Services/Services.jsx'

const Home = () => {
    return (
        <div>
            <ImageSlider slides={SliderData} />
            <Footer />
        </div>
    )
}

export default Home