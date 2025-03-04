import React, { Component, Fragment } from 'react';
import './App.css';
import gsap from 'gsap';
import './css/gsap2.css';
import Logo from './js2/step3/Logo';
import Navigation from './js2/step3/Navigation';
import Content from './js2/step3/Content';

 class App extends Component {
    render() {
        return (
            <div className='container'>
                <div className='top'>
                    <div className="top_inner">
                        <Logo />
                        <Navigation />
                    </div>
                </div>
                <Content />
            </div>
        )
    }
 }

 export default App;