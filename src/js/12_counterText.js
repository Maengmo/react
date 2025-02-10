import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

class CounterText extends React.Component {
    render() {
      let textStyle = {
        paddingBottom: 20,
        fontSize: 36,
        color: "#333"
      };
  
      return (
        <div style={textStyle}>
          {this.props.countProps}
        </div>
      )
    }
  }
  
  class App2 extends React.Component {
    constructor(props) {
      super(props);
  
      this.state= {
        count: 0
      }
    }
  
    countPlus = () => {
      this.setState({
        count: this.state.count +1
      });
    }
  
    countMinus = () => {
      this.setState({
        count: this.state.count -1
      })
    }
  
    render() {
      let backgroundStyle = {
        display: "inline-block",
        padding: 20,
        textAlign: "center",
        backgroundColor: "#f4f4f4",
        borderRadius: 10
      }
      let buttonStyle = {
        margin: 2,
        width: 40,
        height: 30,
        textAlign: "center",
        fontSize: 14,
        fontWeight: "bold",
        color: "#666"
      }
  
      return (
        <div style={backgroundStyle}>
          <CounterText countProps={this.state.count}></CounterText>
          <button onClick={this.countPlus} style={buttonStyle}>+</button>
          <button onClick={this.countMinus} style={buttonStyle}>-</button>
        </div>
      )
    }
  }
  
  root.render (
    <App2></App2>
  )