import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  React.createElement(
    "h1", null, "Hello React!!"
  )
);

reportWebVitals();

class Props extends React.Component {
  render() {
    let {BooleanTrueFalse} = this. props;

    return (
      <div>
        <p>
          {BooleanTrueFalse ? "2. " : "1. "}
          {BooleanTrueFalse.toString()}
        </p>
      </div>
    );
  }
}

class App2 extends React.Component {
  render(){
    let h1Style={
        fontWeight: "normal"
    }
    return(
      <div>
        <h1 style={h1Style}>React Example</h1>
        <Props BooleanTrueFalse={false} />
        <Props BooleanTrueFalse />
      </div>
    );
  }
}

root.render (
  <App2></App2>
)
