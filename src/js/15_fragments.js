import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

class Fragments extends React.Component {
    render() {
        return (
            <Fragments>
                <p>P tag</p>
                <span>SPAN tag</span>
            </Fragments>
        )
    }
}

export default Fragments;