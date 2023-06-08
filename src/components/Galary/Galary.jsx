import React, { Component } from 'react';
import IMG1 from '../../assets/1.jpg'
import IMG2 from '../../assets/2.jpg'
import IMG3 from '../../assets/3.jpg'
import IMG4 from '../../assets/4.jpg'
import IMG5 from '../../assets/5.jpg'
import IMG6 from '../../assets/6.jpg'
import IMG7 from '../../assets/7.jpg'
import IMG8 from '../../assets/8.jpg'
import IMG9 from '../../assets/9.jpg'
import IMG10 from '../../assets/10.jpg'
import './galary.css'



const data = [
    {
        id: 1,
        image: IMG1,
        about: 'Its Me Anonymous(Link to Details)'
    },
    {
        id: 2,
        image: IMG2,
        about: 'Its Me Anonymous(Link to Details)'
    },
    {
        id: 3,
        image: IMG3,
        about: 'Its Me Anonymous(Link to Details)'
    },
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
    },
    {
        id: 7,
        image: IMG7,
        about: 'Its Me Anonymous(Link to Details)'
    },
    {
        id: 8,
        image: IMG8,
        about: 'Its Me Anonymous(Link to Details)'
    },
    {
        id: 9,
        image: IMG9,
        about: 'Its Me Anonymous(Link to Details)'
    },
    {
        id: 10,
        image: IMG10,
        about: 'Its Me Anonymous(Link to Details)'
    }
]

const Galary = () => {
    return (
        <div className='galary-images'>
            {
                data.map(({id, image, about}) => {
                    return (
                        <article key={id} className="galary-image">
                            <div className="toy-image">
                                <img src={image} alt={id} />
                            </div>
                            <h3>{about}</h3>
                            <div className="toy-details">
                                <a href={about} className="btn btn-primary" target='_blank'>About</a>
                            </div>
                        </article>
                    )
                })
            }
        </div>
    )
}

export default Galary