import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

class State extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        stateString : props.program,
        stateVersion: "18.2.0"
      };
  
    }
  
    render() {
      return (
        <div>
          {this.state.stateString} {this.state.stateVersion}
        </div>
      )
    }
  }
  
  class App2 extends React.Component {
    render() {
      let h1Style = {
        fontWeight: "normal"
      }
  
      return (
        <div>
          <h1 style={h1Style}>React Example</h1>
          <State program="React"></State>
        </div>
      )
      
    }
  }
  
  root.render(
    <div>
      <App2></App2>
    </div>
  )
  
  class State2 extends React.Component {
    constructor(props) {
      super(props);
  
      this.state={
        stateString : "React"
      }; 
    }
  
    stateChange=flag => {
      if(flag === "direct") this.state.stateString="React 17.0.2";
      if(flag === "setstate") this.setState({stateString: "React 18.2.0"});
    }
  
    render() {
      let buttonStyle = {
        marginRight: 5,
        marginTop: 20,
        padding: 10,
        fontSize: 14,
        backgroundColor: "#999",
        color: "#fff",
        border: "none",
        cursor: "pointer"
      };
  
      return (
        <div>
           <button onClick={() => this.stateChange("direct")} style={buttonStyle}>state 직접 변경</button>
                  <button onClick={() => this.stateChange("setstate")} style={buttonStyle}>setState() 함수로 변경</button>
                  <p>stateString : {this.state.stateString}</p>
        </div>
      )
    }
  }
  
  class App3 extends React.Component {
    render(){
        let h1Style={
            fontWeight: "normal"
        }
        return(
            <div>
                <h1 style={h1Style}>React Example</h1>
                <State2 />
            </div>
        );
    }
  }
  
  root.render(
    <App3 />
  )
  
  class State3 extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        stateString : "React"
      };
    }
  
    stateChange= () => {
      this.state.stateString = "React 18.2.0";
      this.forceUpdate();
    }
  
    render() {
      let buttonStyle = {
        marginRight: 5,
              marginTop: 20,
              padding: 10,
              fontSize: 14,
              backgroundColor: "#999",
              color: "#fff",
              border: "none",
              cursor: "pointer"
      }
  
      return (
        <div>
          <button onClick={() => this.stateChange()} style={buttonStyle}>state 직접 변경</button>
          <p>stateString : {this.state.stateString}</p>
        </div>
      )
    }
  }
  
  class App4 extends React.Component {
    render(){
        let h1Style={
            fontWeight: "normal"
        }
        return(
            <div>
                <h1 style={h1Style}>React Example</h1>
                <State3 />
            </div>
        );
    }
  }
  
  root.render(
    <App4 />
  )