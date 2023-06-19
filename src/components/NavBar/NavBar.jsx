import React, {Component} from "react";
import { useState } from "react";
import {Link, NavLink} from 'react-router-dom';
import './navbar.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {TfiGallery} from 'react-icons/tfi'
import {BiNews} from 'react-icons/bi'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {BiMap} from 'react-icons/bi'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { RiMenuLine } from 'react-icons/ri';
import { FaTimes } from 'react-icons/fa';
// import Galary from './../Galary/Galary';


const NavBar = () => {
    const [isActive,setIsActive]=useState(false);

    const toggleMenu=()=>{
        setIsActive(!isActive);
    }
    return (
            <div className="navbar">      
                <RiMenuLine onClick={toggleMenu} className={`menu-button ${isActive?"active":""}`} />
                <FaTimes onClick={toggleMenu} className={`cancel-button ${isActive?"active":""}`}/>
                    
                <nav onClick={toggleMenu} className={`nav__items ${isActive?"active":""}`}>
                        <NavLink to="/home" className="nav-item nav-link">
                            <AiOutlineHome />Home
                        </NavLink>
                        <NavLink to="/about" className="nav-item nav-link">
                            <AiOutlineUser />About
                        </NavLink>
                        <NavLink to="/galary" className="nav-item nav-link">
                            <TfiGallery />Gallery
                        </NavLink>
                        <NavLink to="/news" className="nav-item nav-link">
                            <BiNews />News &amp; Events
                        </NavLink>
                        <NavLink to="/contact" className="nav-item nav-link">
                            <BiMessageSquareDetail />Contact us
                        </NavLink>
                        <NavLink className="nav-item nav-link" to="/route">
                            <BiMap />Route Map
                        </NavLink>
                        <NavLink className="nav-item nav-link disabled-link" to="/shopping">
                            <AiOutlineShoppingCart />Shopping
                        </NavLink>
                    <div className="menu-icon"></div>
                    {/* <a href="#" className="nav__item active"><AiOutlineHome />Home</a>
                    <a href="#" className="nav__item"><AiOutlineUser />About</a>
                    <a href="#" className="nav__item"><TfiGallery />Gallery</a>
                    <a href="#" className="nav__item"><BiNews />News &amp; Events</a>
                    <a href="#" className="nav__item"><BiMessageSquareDetail />Contact us</a>
                    <a href="#" className="nav__item"><BiMap />Route Map</a>
                    <a href="#" className="nav__item disabled-link"><AiOutlineShoppingCart />Shopping</a> */}
                </nav>
            </div>
    )
}

export default NavBar