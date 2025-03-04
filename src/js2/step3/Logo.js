import React, { Component } from 'react';

class Logo extends React.Component {
    render() {
        return (
            <h1 className='logo'>
                <a href=''>
                    <img src="/assets/images/logo.png" alt='logo'></img>
                </a>
            </h1>
        )
    }
}

export default Logo;