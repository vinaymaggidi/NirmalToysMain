import React, {Component} from "react";
import './navbar.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {TfiGallery} from 'react-icons/tfi'
import {BiNews} from 'react-icons/bi'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {BiMap} from 'react-icons/bi'
import {AiOutlineShoppingCart} from 'react-icons/ai'


const NavBar = () => {
    return (
            <nav className="nav__items">
                <a href="#" className="nav__item active"><AiOutlineHome />Home</a>
                <a href="#" className="nav__item"><AiOutlineUser />About</a>
                <a href="#" className="nav__item"><TfiGallery />Gallery</a>
                <a href="#" className="nav__item"><BiNews />News &amp; Events</a>
                <a href="#" className="nav__item"><BiMessageSquareDetail />Contact us</a>
                <a href="#" className="nav__item"><BiMap />Route Map</a>
                <a href="#" className="nav__item disabled-link"><AiOutlineShoppingCart />Shopping</a>
                <div className="menu-icon"></div>
            </nav>
    )
}

export default NavBar