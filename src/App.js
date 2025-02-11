import React, { Component } from 'react';
import './App.css';
import AddTask from './js/18_AddTask';

 class App extends Component {
    render() {
        return (
            <div className="container">
                <h1>React TodoList</h1>
                <AddTask></AddTask>
            </div>
        )
    }
 }

 export default App;