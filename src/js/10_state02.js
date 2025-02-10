import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

class AutoCounter extends React.Component {
    render() {
      let titleStyle = {
        margin: 0, 
        padding: 0,
        fontWeight: "bold",
        color: "#333"
      };
  
      return (
        <p style={titleStyle}>ReactExample</p>
      )
    }
  }
  
  class AuthoCounterBox extends React.Component {
    render() {
      let boxStyle = {
        display: "inline-block",
        padding: 20,
        backgroundColor: "#eaeaea",
        borderRadius: 6
      };
  
      return (
        <div style={boxStyle}>
          <AutoCounter></AutoCounter>
        </div>
      )
    }
  }
  
  root.render(
    <AuthoCounterBox></AuthoCounterBox>
  )
  
  class AutoCounter2 extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        count : 0
      }
    }
  
        /*
      timer(){
          // console.log(this.state.count);
          this.setState({
              count: this.state.count+10
          });
      }
      componentDidMount(){
          // this.timer();
          setTimeout(this.timer, 1000);
      }
      */
      /*
      timer(){
          this.setState({
              count: this.state.count+10
          });
      }
      componentDidMount(){
          setTimeout(this.timer.bind(this), 1000);
      }
   */
    timer=() => {
      this.setState({
          count: this.state.count+10
      });
    }
    componentDidMount(){
      // setTimeout(this.timer, 1000);
      setInterval(this.timer, 1000);
    }
    /*
    timer(){
      this.setState({
          count: this.state.count+10
      });
    }
    componentDidMount(){
      setInterval(this.timer.bind(this), 1000);
    }
      */
    render(){
      let titleStyle={
          margin: 0,
          padding: 0,
          fontWeight: "bold",
          color: "#333"
      };
      return(
          <p style={titleStyle}>{this.state.count}</p>
      );
    }
  
  }
  
  class AutoCounterBox2 extends React.Component {
    render(){
      let boxStyle={
          display: "inline-block",
          padding: 20,
          backgroundColor: "#eaeaea",
          borderRadius: 6
      };
      return(
        <div style={boxStyle}>
          <AutoCounter2 />
        </div>
      );
    }
  }
  
  root.render (
    <AutoCounterBox2></AutoCounterBox2>
  )