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

class ColorPalette extends React.Component {
  render() {
    let paletteStyle= {
      display: "inline-block",
      marginRight: 10,
      width: 100,
      height: 100,
      backGroundColor: '#fff',
      boxShadow: "1px 1px 2px rgba(0,0,0,2)"
    };
    return (
      <div style={paletteStyle}></div>
    )
  }
}

root.render(
  <ColorPalette></ColorPalette>
)

class ColorChip extends React.Component {
  render() {
    let chipStyle = {
      width : 100,
      hegith : 100,
      backGroundColor: '#09f'
    };

    return (
      <div style={chipStyle}></div>
    )
  }
}

class ColorPalette2 extends React.Component {
  render() {
    let paletteStyle = {
      display: "inline-block",
      marginRight: 16,
      backGroundColor: "#fff",
      boxShadow: "1px 1px 2px rgba(0, 0, 0, 2)"
    };

    return (
      <div style={paletteStyle}>
        <ColorChip></ColorChip>
      </div>
    )
  }
}

root.render(
  <ColorPalette2></ColorPalette2>
)

class ColorChip2 extends React.Component {
  render() {
    let chipStyle = {
      width: 100,
      height: 100,
      backGroundColor: "#09f"
    }

    return (
      <div style={chipStyle}></div>
    )
  }
}

class ColorName extends React.Component {
  render() {
    let nameStyle= {
      margin : 0, 
      padding: 10,
      textAlign: "center",
      fontSize: 14,
      fontWeight: "bold"
    }

    return (
      <p style={nameStyle}>#09f</p>
    )
  }
}

class ColorPalette3 extends React.Component {
  render() {
    let paletteStyle = {
      display : "inline-block",
      marginRight : 16,
      backGroundColor : "#fff",
      boxShadow: "1px 1px 2px rgba(0,0,0,2)"
    };

    return (
      <div style={paletteStyle}>
        <ColorChip2></ColorChip2>
        <ColorName></ColorName>
      </div>
    )
  }
}

root.render(
  <ColorPalette3></ColorPalette3>
)

class ColorChip3 extends React.Component {
  render() {
    let chipStyle = {
      width: 100, 
      height: 100,
      backgroundColor: this.props.color
    };

    return (
      <div style={chipStyle}></div>
    )
  }
}

class ColorName2 extends React.Component {
  render() {
    let nameStyle = {
      margin : 0,
      padding : 10, 
      textAlign : "center",
      fontSize : 14,
      color: this.props.color,
      fontWeight : "bold"
    }

    return (
      <p style={nameStyle}>{this.props.color}</p>
    )
  }
}

class ColorPalette4 extends React.Component {
  render() {
    let paletteStyle = {
      display : "inline-block",
      marginRight : 16,
      backGroundColor : '#fff',
      boxShadow : "1px 1px 2px rgba(0,0,0,2)"
    }

    return (
      <div style={paletteStyle}>
        <ColorChip3 color={this.props.color}></ColorChip3>
        <ColorName2 color={this.props.color}></ColorName2>
      </div>
    )
  }
}

root.render (
  <div>
    <ColorPalette4 color='#f90'></ColorPalette4>
    <ColorPalette4 color= "#00A2E8"></ColorPalette4>
    <ColorPalette4 color= "#8888"></ColorPalette4>
  </div>
)