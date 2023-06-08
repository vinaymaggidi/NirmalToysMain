import React, { Component } from 'react';
import './index.css';
import StickyHeader from './components/Header/StickyHeader'
import Navbar from './components/NavBar/NavBar';
import About from './components/About/About';

import { Route, Redirect, Switch } from "react-router-dom";
import Galary from './components/Galary/Galary';
import Home from './components/Home/Home';
import PrivacyPolicy from './components/About/PrivacyPolicy';


function App() {
    return (
        <>
            <StickyHeader />
            <Navbar />
            <main className="app-container">
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/galary" component={Galary} />
                    <Route path="/about" component={About} />
                    <Route path="/privacypolicy" component={PrivacyPolicy}/>
                </Switch>
            </main>

        </>
    );
}
 
export default App;