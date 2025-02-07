import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

class Component2 extends React.Component {
    render() {
      return (
        <h2> This is imported Component. </h2>
      );
    }
  }
  
  class Component1 extends React.Component {
    render() {
      return (
        <div>
          <h1>React Example</h1>
          <Component2></Component2>
        </div>
      );
    }
  }
  
  root.render (
    <Component1></Component1>
  )

  class Component4 extends React.Component {
    render() {
      let h2Style={
        fontSize: 16,
        fontWeight: "normal"
      }
  
      return (
        <h2 style={h2Style}>This is imported Component</h2>
      )
    }
  }
  
  class Component3 extends React.Component {
    render() {
      let h1Style={
        fontWeight: "normal"
      }
  
      return (
        <div>
          <h1 style={h1Style}>React Example</h1>
          <Component4></Component4>
        </div>
      )
    }
  }
  
  root.render(
      <Component3></Component3>
  )