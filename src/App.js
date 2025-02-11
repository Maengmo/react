import React, { Component } from 'react';
import './App.css';
import ReturnMap from './js/16_ReturnMap';
import DataComponent from './js/17_DataComponent';

 class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loginData : [
                {name: "member1", age: 21},
                {name: "member2", age: 22},
                {name: "member3", age: 23},
            ]
        }
    }
    render() {
        return (
            <div className="container">
                <h1>React Example</h1>
                <DataComponent loginData={this.state.loginData}></DataComponent>
            </div>
        )
    }
 }

 export default App;