// import React, {Component} from "react";
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
import {BsFillTelephoneFill, BsLinkedin} from 'react-icons/bs'
import {FaMapMarkerAlt} from 'react-icons/fa'
import { HiMail } from "react-icons/hi";
import rgukt from '../../assets/rgukt.png';
import About from '../About/About'
import {Link, NavLink} from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="footerabove">
                    <div className="footerLeft">
                        <div className="footerHeading"><h2>ABOUT</h2></div>
                        <ul className="footerLeftList">
                            <NavLink to="/about" ><li>About us</li></NavLink>
                            <NavLink to="/galary"><li>Gallery</li></NavLink>
                            <NavLink to="/news"><li>News &amp; Events</li></NavLink>
                            <NavLink to="/route"><li>Route Map</li></NavLink>
                            <NavLink to="/contact"><li>Contact Us</li></NavLink>
                            <NavLink to="/privacypolicy"><li>Privacy Policy</li></NavLink>
                        </ul>
                    </div>
                    <div className="footerCenter">
                        <h2 className="footerHeading">DESIGNED AND DEVELOPED BY</h2>
                        <img src={rgukt} alt="rgukt" className="rguktLogo" />
                    </div>
                    <div className="footerRight">
                    <div className="footerHeading"><h2>CONTACT US</h2></div>
                    <ul className="footerRightList">
                            <li className='footerRightListItem'><FaMapMarkerAlt/> Nirmal Toys & Arts Industrial Co-operative</li>
                            <li className='footerRightListItem'>Society Ltd Beside Govt Boys Junior College,</li>
                            <li className='footerRightListItem'>Nirmal 504106</li>
                            <li className='footerRightListItem'>Telangana,India</li>
                            <li className='footerRightListItem'><BsFillTelephoneFill/>   +91 9704680518</li>
                            <li className='footerRightListItem'><HiMail />nirmaltoys@gmail.com</li>
                        </ul>
                    </div>
                </div>
                <div className="footerbelow">
                    <div className="footer__socialMedia">
                            <a href="/" target='_blank'><BsLinkedin /></a>
                            <a href="/" target='_blank'><FaFacebookF /></a>
                            <a href="https://www.instagram.com/_victory_vinay_/" rel="noreferrer" target='_blank'><FiInstagram /></a>
                            <a href="/" target='_blank'><IoLogoTwitter /></a>
                    </div>
                    <div className="footer__copyright">
                        <small>Copyright &copy; Nirmal Toys | 2023 All rights reserved.</small>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer