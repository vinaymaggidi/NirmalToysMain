import React, { Component } from 'react';
import IMG1 from '../../assets/1.png'
import IMG2 from '../../assets/2.png'
import IMG3 from '../../assets/3.png'
import IMG4 from '../../assets/4.png'
import IMG5 from '../../assets/5.png'
import IMG6 from '../../assets/6.png'
import IMG7 from '../../assets/7.png'
import IMG8 from '../../assets/8.png'
import IMG9 from '../../assets/9.png'
import IMG10 from '../../assets/10.png'
import IMG11 from '../../assets/11.png'
import IMG12 from '../../assets/12.png'
import IMG13 from '../../assets/13.png'
import IMG14 from '../../assets/14.png'
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
    },
    {
        id: 11,
        image: IMG11,
        about: 'Its Me Anonymous(Link to Details)'
    },
    {
        id: 12,
        image: IMG12,
        about: 'Its Me Anonymous(Link to Details)'
    },
    {
        id: 13,
        image: IMG13,
        about: 'Its Me Anonymous(Link to Details)'
    },
    {
        id: 14,
        image: IMG14,
        about: 'Its Me Anonymous(Link to Details)'
    },
    {
        id: 15,
        image: IMG1,
        about: 'Its Me Anonymous(Link to Details)'
    },
    {
        id: 16,
        image: IMG2,
        about: 'Its Me Anonymous(Link to Details)'
    },
    {
        id: 17,
        image: IMG3,
        about: 'Its Me Anonymous(Link to Details)'
    },
    {
        id: 18,
        image: IMG4,
        about: 'Its Me Anonymous(Link to Details)'
    },
    {
        id: 19,
        image: IMG5,
        about: 'Its Me Anonymous(Link to Details)'
    },
    {
        id: 20,
        image: IMG6,
        about: 'Its Me Anonymous(Link to Details)'
    },
    {
        id: 21,
        image: IMG7,
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
    )
}

export default Galary