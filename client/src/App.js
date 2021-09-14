import React from 'react';
import {BrowserRouter, Switch, Route as BrowserRoute} from 'react-router-dom';

// Components
import Navbar from './components/Navbar/Navbar.index.js';
import Footer from './components/Footer/Footer.index.js';

// Pages
import Home from './pages/Home/Home.index.js';
import About from './pages/About/About.index.js';
import ResidentLife from './pages/ResidentLife/ResidentLife.index.js';

// Data
import { Copyright } from './Data.js';

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Navbar/>
                <Switch>
                    <BrowserRoute path='/' exact component={Home}/>
                    <BrowserRoute path='/about' exact component={About}/>
                    <BrowserRoute path='/residentlife' exact component={ResidentLife}/>
                </Switch>
                <Footer text={Copyright.text}/>
            </BrowserRouter>
        </div>
    )
}

export default App
