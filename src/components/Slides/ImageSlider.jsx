import React, { useState, useEffect } from 'react';
import { SliderData } from './SliderData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import Galary from '../Galary/Galary'
import './imageSlider.css'

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);

  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <>
    <section className='container slider'>
      <button className='left-arrow' onClick={prevSlide} ><FaArrowAltCircleLeft /></button>
      <button className='right-arrow' onClick={nextSlide} ><FaArrowAltCircleRight /></button>
      {SliderData.map((slide, index) => {
        return (
            <div
              className={index === current ? 'slide active' : 'slide'}
              key={index}
            >
              {index === current && (
                <img src={slide.image} alt='toyImage' className='image' />
              )}
            </div>
        );
      })}
    </section>
    {/* <div className="showMore">
        <button>ShowMore<br/><span>&circ;</span></button>
    </div> */}
    </>
  )
}

export default ImageSlider;