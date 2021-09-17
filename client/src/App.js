import React , { useState} from 'react';
import {BrowserRouter, Switch, Route as BrowserRoute} from 'react-router-dom';

// Components
import Navbar from './components/Navbar/Navbar.index.js';
import Footer from './components/Footer/Footer.index.js';

// Pages
import Home from './pages/Home/Home.index.js';
import About from './pages/About/About.index.js';
import ResidentLife from './pages/ResidentLife/ResidentLife.index.js';

// Data

const App = () => {

    const [location, setLocation] = useState('home');


    return (
        <BrowserRouter>
            <Navbar location={location}/>
            <Switch>
                <BrowserRoute path='/' exact>
                    <Home setLocation={setLocation}/>
                </BrowserRoute>
                <BrowserRoute path='/about' exact>
                    <About setLocation={setLocation}/>
                </BrowserRoute>
                <BrowserRoute path='/residentlife' exact>
                    <ResidentLife setLocation={setLocation}/>
                </BrowserRoute>
            </Switch>
            <Footer />
        </BrowserRouter>
    )
}

export default App
