import React, {Component} from "react";
import './header.css'
import StickyHeader from "./StickyHeader";
import NavBar from "../NavBar/NavBar";
import Slide1 from '../../assets/slide1.jpg'
import Slide2 from '../../assets/slide2.jpg'
import Slide3 from '../../assets/slide3.jpg'
import Slide4 from '../../assets/slide4.jpg'
import Slide5 from '../../assets/slide5.jpg'
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css'
import 'swiper/css/pagination'

const Header = () => {
    return (
        <>
            <StickyHeader />
            <NavBar />
            <Swiper className="container slideshow__container"
                modules={[Pagination]}
                spaceBetween={40}
                slidePrevClass={1}
                pagination={{ clickable: true }}>
                <SwiperSlide className="slide"><img src={Slide1} alt="" /></SwiperSlide>
                <SwiperSlide className="slide"><img src={Slide2} alt="" /></SwiperSlide>
                <SwiperSlide className="slide"><img src={Slide3} alt="" /></SwiperSlide>
                <SwiperSlide className="slide"><img src={Slide4} alt="" /></SwiperSlide>
                <SwiperSlide className="slide"><img src={Slide5} alt="" /></SwiperSlide>
            </Swiper>

        </>
    )
}

export default Header