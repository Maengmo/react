import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

class LifeCycle extends React.Component {
    render() {
      let h2Style= {
        fontSize: 16,
        fontWeight: "normal"
      };
  
      console.log("3, render()");
  
      return (
        <h2 style={h2Style}>This is Render Function</h2>
      )
    }
  }
  
  class App2 extends React.Component {
    render() {
      let h1Style= {
        fontWeight: "normal"
      }
      return (
        <div>
          <h1 style={h1Style}>React Example</h1>
          <LifeCycle></LifeCycle>
        </div>
      );
    }
  }
  
  root.render (
    <App2></App2>
  )

  class LifeCycle2 extends React.Component {
    constructor(props){
      super(props);
      console.log("1, constructor()");
    }
    render(){
      let h2Style={
          fontSize: 16,
          fontWeight: "normal"
      };
      console.log("3. render()");
      return(
          <h2 style={h2Style}>This is Render Function.</h2>
      );
    }
  }
  
  class App3 extends React.Component {
  render(){
      let h1Style={
          fontWeight: "normal"
      };
      return(
          <div>
              <h1 style={h1Style}>React Example</h1>
              <LifeCycle2 />
          </div>
      );
    }
  }

  class LifeCycle3 extends React.Component {
    constructor(props) {
      super(props);
  
      console.log("1, constructor()");
      console.log(props);
    }
  
    static getDerivedStateFromProps(props, state) {
      console.log("2. getDerivedStateFromProps() : "+props.propValue)
      console.log(props);
      console.log(state)
  
      return {};
    }
  
    render(){
      let h2Style={
          fontSize: 16,
          fontWeight: "normal"
      };
      console.log("3. render()");
      return(
          <h2 style={h2Style}>This is Render Function.</h2>
      );
    }
  
  }
  
  class App4 extends React.Component {
    render() {
      let h1Style= {
        fontWeight: "normal"
      };
  
      return (
        <div>
          <h1 style={h1Style}>Hello React!</h1>
          <LifeCycle3 propValue="formApp"></LifeCycle3>
        </div>
      )
    }
  }
  
  root.render(
    <App4></App4>
  )

  class LifeCycle4 extends React.Component {
    constructor(props) {
      super(props);
  
      console.log("1, consturctor()");
      console.log(props);
    }
  
    static getDerivedStateFromProps(props, state) {
      console.log("2, getDerivedStateFromProps() : " + props.propValue);
  
      return {template: props.propValue};
    }
  
    componentDidMount() {
      console.log("4, componentDidMount()");
      console.log("5, template : " + this.state.tempState);
      console.log(this.state);
    }
  
    render() {
      let h2Style= {
        fontSize: 16,
        fontWeight: "normal"
      };
  
      console.log("3, render()");
  
      return (
        <h2 style={h2Style}>This is Render Function</h2>
      )
    }
  }
  
  class App5 extends React.Component {
    render() {
      let h1Style= {
        fontWeight: "normal"
      };
  
      return(
        <div>
          <h1 style={h1Style}>Hello React</h1>
          <LifeCycle4 propValue="fromApp"></LifeCycle4>
        </div>
      )
    }
  }
  
  root.render (
    <App5></App5>
  )

  class Lifecycle5 extends React.Component {
    constructor(props){
        super(props);
        this.state={};
        console.log("1. constructor()");
        console.log(props);
    }
    static getDerivedStateFromProps(props, state){
        console.log("2. getDerivedStateFromProps() : "+props.propsValue);
        return {tempState1: props.propsValue};
    }
    shouldComponentUpdate(){
        console.log("6. shouldComponentUpdate()");
        return true;
    }
    componentDidMount(){
        console.log("4. componentDidMount()");
        console.log("5. tempState1 : "+this.state.tempState1);
  
        this.setState({tempstate2: true});
    }
    render(){
        let h2Style={
            fontSize: 16,
            fontWeight: "normal"
        };
        console.log("3. render()");
        return(
            <h2 style={h2Style}>This is Render Function.</h2>
        );
    }
  }
  class App6 extends React.Component {
    render(){
        let h1Style={
            fontWeight: "normal"
        };
        return(
            <div>
                <h1 style={h1Style}>Hello React</h1>
                <Lifecycle5 propsValue="fromApp" />
            </div>
        );
    }
  }
  
  root.render(
    <App6 />
  )