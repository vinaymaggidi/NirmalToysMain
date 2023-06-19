import React, { Component } from 'react';
import './index.css';
import StickyHeader from './components/Header/StickyHeader'
import Navbar from './components/NavBar/NavBar';
import About from './components/About/About';
import { Route, Redirect, Switch } from "react-router-dom";
import Galary from './components/Galary/Galary';
import Home from './components/Home/Home';
import PrivacyPolicy from './components/About/PrivacyPolicy';
import RouteMap from './components/RouteMap/RouteMap';
import Contact from './components/Contact/Contact';
import NewsEvents from './components/NewsEvents/NewsEvents';
 
function App() {
    return (
        <>
            <StickyHeader />
            <Navbar />
            <main className="app-container">
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/galary" component={Galary} />
                    <Route path="/news" component={NewsEvents} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/privacypolicy" component={PrivacyPolicy}/>
                    <Route path="/route" component={RouteMap} />
                    <Route path="/news" component={NewsEvents}/>
                    <Redirect from="/" to="/home"/>
                </Switch>
            </main>

        </>
    );
}
export default App;