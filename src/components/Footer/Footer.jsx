import React, {Component} from "react";
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
import {BsLinkedin} from 'react-icons/bs'

const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer__socialMedia">
                    <a href="#" target='_blank'><BsLinkedin /></a>
                    <a href="#" target='_blank'><FaFacebookF /></a>
                    <a href="https://www.instagram.com/_victory_vinay_/" target='_blank'><FiInstagram /></a>
                    <a href="#" target='_blank'><IoLogoTwitter /></a>
                </div>

                <div className="footer__copyright">
                    <small>Copyright &copy; Nirmal Toys | 2023 All rights reserved.</small>
                </div>
            </footer>
        </>
    )
}

export default Footer