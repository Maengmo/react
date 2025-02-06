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

class StudyReact extends React.Component {
    render() {
        return (
            <h5>Study React {this.props.type} {this.props.user} </h5>
        )
    }
}

root.render(
  <div>
      <StudyReact type="type1" user="kim" />
      <StudyReact type="type2" />
      <StudyReact type="type3" />
      <StudyReact type="type4" />
      <StudyReact type="type5" />
  </div>
);

//Button
class Button extends React.Component {
  render() {
    return (
      <button type={this.props.attr}>{this.props.children}</button>
    )
  }
}

root.render (
  <div>
    <Button attr="button">Button</Button>
    <Button attr="reset">Reset</Button>
    <Button attr="submit">Submit</Button>
  </div>
)

//korean
class Korean extends React.Component {
  render() {
    return (
      <div className="korean">
        {this.props.children}
      </div>
    );
  }
}

root.render (
  <div>
    <Korean>가</Korean>
    <Korean>나</Korean>
    <Korean>다</Korean>
    <Korean>라</Korean>
  </div>
)

//korean2
class Korean2 extends React.Component {
  render() {
    let koreanStyle = {
      display: "inline-block",
      margin: 10,
      padding: 10,
      backgroundColor: this.props.bgColor
    };

    return (
      <div style={koreanStyle}>
        {this.props.children}
      </div>
    )
  }
}

root.render(
  <div>
    <Korean2 bgColor="#eaeaea">가</Korean2>
    <Korean2 bgColor="#ccc">나</Korean2>
    <Korean2 bgColor="#999">다</Korean2>
  </div>
) 

//컴포넌트 조합하기 - 단계 1
// class Component2 extends React.Component {
//   render() {
//     return (
//       <h2> This is imported Component. </h2>
//     );
//   }
// }

// class Component1 extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>React Example</h1>
//         <Component2></Component2>
//       </div>
//     );
//   }
// }

// root.render (
//   <Component1></Component1>
// )
//컴포넌트 조합하기 - 단계 2
class Component2 extends React.Component {
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

class Component1 extends React.Component {
  render() {
    let h1Style={
      fontWeight: "normal"
    }

    return (
      <div>
        <h1 style={h1Style}>React Example</h1>
        <Component2></Component2>
      </div>
    )
  }
}

root.render(
    <Component1></Component1>
)

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

// class App2 extends React.Component {
//   render() {
//     let h1Style= {
//       fontWeight: "normal"
//     }
//     return (
//       <div>
//         <h1 style={h1Style}>React Example</h1>
//         <LifeCycle></LifeCycle> 
//       </div>
//     );
//   }
// }

// root.render (
//   <App2></App2>
// )

//LifeCycle2 - constructure(props)
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

class App2 extends React.Component {
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

root.render (
  <App2></App2>
)

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

class App3 extends React.Component {
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
  <App3></App3>
)

class LifeCycle4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { propValue: '' };

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

class App4 extends React.Component {
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
  <App4></App4>
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
class App5 extends React.Component {
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
  <App5 />
)