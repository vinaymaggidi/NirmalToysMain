import React, {Component} from "react";
import './stickyheader.css'
import TS from '../../assets/ts-logo.png';
import  LOGO from '../../assets/logo.png';

const StickyHeader = () => {
    return (
        <section className="stickyheader__header">
            <div className="contain sticky__header">
                <img src={TS} alt="" className="ts-logo__header"/>
                <img src={LOGO} alt="" className="logo__header"/>
            </div>
        </section>
    )
}

export default StickyHeader