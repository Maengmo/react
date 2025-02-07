import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

class Props extends React.Component {
    render() {
      // console.log(this.props);
  
      let propsValue = this.props.propsValue;
      propsValue+=" from App Component.";
  
      return (
        <div>{propsValue}</div>
      );
    }
  }
  
  class App extends React.Component {
    render() {
      let h1Style= {
        fontWeight: "normal"
      }
      return (
        <div>
          <h1 style={h1Style}>React Example</h1>
          <Props propsValue="This is props"></Props>
        </div>
      );
    }
  }
  
  root.render(
    <App></App>
  )

  class Props2 extends React.Component {
    render() {
      let { stringData, numberData, booleanData, arrayData, objectData, functionData } = this.props;
  
      return (
        <div>
          <p>stringData : {stringData}</p>
          <p>numberData : {numberData}</p>
          <p>booleanData : {booleanData ? "true" : "false"}</p>
          <p>arrayData : {JSON.stringify(arrayData)}</p>
          <p>objectData : {JSON.stringify(objectData)}</p> 
          <p>functionData : {functionData()}</p> 
        </div>
      );
    }
  }
  
  class App2 extends React.Component {
    render() {
      let h1Style = {
        fontSize: 20,
        fontWeight: "normal",
      };
  
      return (
        <div>
          <h1 style={h1Style}>Hello React</h1>
          <Props2
            stringData="React"
            numberData={10}
            booleanData={1 === 1}
            arrayData={[0, 1, 2]}
            objectData={{ UI: "HTML, CSS, JavaScript", program: "React" }}
            functionData={() => "Function executed"}
          />
        </div>
      );
    }
  }
  
  root.render(<App2 />);

  class Props3 extends React.Component {
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
  
  class App3 extends React.Component {
    render(){
      let h1Style={
          fontWeight: "normal"
      }
      return(
        <div>
          <h1 style={h1Style}>React Example</h1>
          <Props3 BooleanTrueFalse={false} />
          <Props3 BooleanTrueFalse />
        </div>
      );
    }
  }
  
  root.render (
    <App3></App3>
  )