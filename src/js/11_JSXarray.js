import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

class Round extends React.Component {
    render() {
      let roundStyle = {
        display: "inline-block",
        margin:10,
        width: 100,
        height: 100,
        backgroundColor: this.props.backgroundColor,
        borderRadius: 50
      }
  
      return(
        <div style={roundStyle}></div>
      )
    };
    
  }
  
  root.render (
    <Round></Round>
  )
  
  class Round2 extends React.Component {
    render() {
      let roundStyle = {
        display: "inline-block",
        margin:10,
        width: 100,
        height: 100,
        backgroundColor: this.props.backgroundColor,
        borderRadius: 50
      }
  
      return (
        <div style={roundStyle}></div>
      )
    }
  }
  
  let round1 = <Round2 backgroundColor="#f90"></Round2>;
  let round2 = <Round2 backgroundColor="#eaeaea"></Round2>;
  
  root.render (
    <div>
      {round1}
      {round2}
    </div>
  )
  
  class Round3 extends React.Component {
    render() {
      let roundStyle={
        display: "inline-block",
        margin: 10,
        width: 100,
        height: 100,
        backgroundColor: this.props.backgroundColor,
        borderRadius: 50
      };
      return(
          <div style={roundStyle}></div>
      ) 
    }
  }
  
  let drawNewRound=() => {
    let colors=["#f90", "#09f", "#eaeaea", "#ccc"];
    let randomColor=Math.floor(Math.random()*colors.length);
    return <Round3 backgroundColor={colors[randomColor]} />
  };
  
  root.render (
    <div>
      {drawNewRound()}
      {drawNewRound()}
      {drawNewRound()}
      {drawNewRound()}
    </div>
  )
  
  class Round4 extends React.Component {
    render(){
        let roundStyle={
            display: "inline-block",
            margin: 10,
            width: 100,
            height: 100,
            backgroundColor: this.props.backgroundColor,
            borderRadius: 50
        };
        return(
            <div style={roundStyle}></div>
        );
    }
  }
  
  let colors=["#f90", "#09f", "#8ac007", "#eaeaea", "#ccc", "#999"];
  
  let componentData=colors.map((d, i) => <Round4 key={i+1} backgroundColor={d} />);
  
  root.render (
    <div>
      {componentData}
    </div>
  )