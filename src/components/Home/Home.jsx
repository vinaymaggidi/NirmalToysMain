import React, { Component } from 'react';
// import Contact from '../Contact/Contact.jsx';
import Footer from '../Footer/Footer.jsx'
// import About from '../About/About.jsx';
import ImageSlider from '../Slides/ImageSlider.jsx';
import { SliderData } from '../Slides/SliderData.jsx';
import IMG4 from '../../assets/4.png'
import IMG5 from '../../assets/5.png'
import IMG6 from '../../assets/6.png'
// import Services from '../Services/Services.jsx'
import { NavLink } from 'react-router-dom';
import './home.css'

const data = [
    {
        id: 4,
        image: IMG4,
        about: 'Its Me Anonymous(Link to Details)'
    },
    {
        id: 5,
        image: IMG5,
        about: 'Its Me Anonymous(Link to Details)'
    },
    {
        id: 6,
        image: IMG6,
        about: 'Its Me Anonymous(Link to Details)'
    }
];

const Home = () => {
    return (
        <div>
            <ImageSlider slides={SliderData} />

            <div className='galary-images'>
            {
                data.map(({id, image, about}) => {
                    return (
                        <article key={id} className="galary-image">
                            <div className="toy-image">
                                <img className="toy" src={image} alt={id} />
                            </div>
                            <h3 className='about'>{about}</h3>
                            <div className="toy-details">
                                <a href={about} className="btn btn-primary" target='_blank'>About</a>
                            </div>
                        </article>
                    )
                })
            }
            </div>
            <button className="more"><NavLink to="/galary">more</NavLink></button>
            <Footer />
        </div>
    )
}

export default Home