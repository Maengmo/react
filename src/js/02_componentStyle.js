import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

class Person {
    constructor(name, gender, age){
        this.name=name;
        this.gender=gender;
        this.age=age;
    }
    profile(){
        return(`${this.name}, ${this.gender}, ${this.age}`);
    }
 }

 const person1=new Person("kim", "man", 45);
 let returnData=person1.profile();
 // console.log(returnData); // kim, man, 45
 class Student extends Person {
    constructor(name, gender, age){
        super(name, gender, age);
    }
    study(){
        return("study hard");
    }
 }
 const person2=new Student("lee", "woman", 19);
 returnData=person2.profile();
 console.log(returnData); // lee, woman, 19
 returnData=person2.study();
 console.log(returnData); // study hard

 class HelloReact extends React.Component {
    render(){
        return(
            <p>Hello React</p>
        );
    }
}


root.render(
    <HelloReact />
)

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