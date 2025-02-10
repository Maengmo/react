import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));


class Component3 extends React.Component {
    render() {
      return (
        <div>
          <p>{this.props.color}</p>
          <p>{this.props.name}</p>
          <p>{this.props.size}</p>
        </div>
      )
    }
  }
  
  class Component2 extends React.Component {
    render() {
      return (
        <Component3 color={this.props.color} name={this.props.name} size={this.props.size}></Component3>
      )
    }
  }
  
  class Component1 extends React.Component {
    render() {
      return (
        <Component2 color={this.props.color} name={this.props.name} size={this.props.size}></Component2>
      )
    }
  }
  
  root.render(
    <Component1 color="#f90" name="orange" size="small"></Component1>
  )
  
  class Component6 extends React.Component {
    render() {
      return (
        <div>
          <p style={{ color: this.props.color }}>{this.props.color}</p>
          <p>{this.props.name}</p>
          <p>{this.props.size}</p>
        </div>
      )
    }
  }
  
  class Component5 extends React.Component {
    render() {
      return (
        <Component6 {...this.props}></Component6>
      )
    }
  }
  
  class Component4 extends React.Component {
    render(){
        return(
            <Component5 {...this.props} />
        );  
    }
  }
  
  root.render(
    <Component4 color="#f90" size="small" name="orange"></Component4>
  )