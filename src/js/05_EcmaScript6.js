import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

class ES6 extends React.Component {
    componentDidMount() {
      var jsString1 = "JavaScript";
      var jsString2 = "입니다. \n 다음줄 입니다.";
      console.log(jsString1+" 프로그래밍"+jsString2)
  
      let ES6String1 = "ES6";
      let ES6String2 = "입니다. ";
      console.log(ES6String1+" 프로그래밍"+ES6String2);
  
      let LongString = "ES6에 추가된 String 함수들입니다."
       console.log("startsWith : "+LongString.startsWith("ES6에 추가"));
       console.log("endsWith : "+LongString.endsWith("함수들입니다."));
       console.log("includes : "+LongString.includes("추가된 String"));
    }
  
    render() {
      let h2Style = {
        fontSize: 16,
        fontWeight: "normal"
      };
  
      return(
        <h2 style={h2Style}>This is ES6 String </h2>
      )
    }
  }
  
  class App6 extends React.Component {
    render(){
      let h1Style={
          fontWeight: "normal"
      };
      return(
          <div>
              <h1 style={h1Style}>React Example</h1>
              <ES6 />
          </div>
      );
    }
  }
  
  root.render(
    <App6></App6>
  )

  class Variables extends React.Component {
    constructor(props) {
      super(props);
      this.state={};
    }
  
    componentDidMount() {
      var varName = "React";
      console.log("varName : " + varName);
  
      var varName = "React 18.2.0";
      console.log("varName : " + varName);
  
      let letName = "React";
      console.log("letName : " + letName);
  
      letName="React 18.2.0";
      // console.log("letName : "+letName);
      // const constName="React";
      // console.log("constName : "+constName);
      // const constName="React 18.2.0";
      // Parsing error : Identifier 'constName' has already been declared
      // constName="React 18.2.0";
      // Uncaught TypeError : Assignment to constant variable
    }
    render(){
      let h2Style={
          fontSize: 16,
          fontWeight: "normal"
      };
      return(
          <h2 style={h2Style}>This is ES6 Variables.</h2>
      );
    }
  }
  class App7 extends React.Component {
    render(){
        let h1Style={
            fontWeight: "normal"
        };
        return(
            <div>
                <h1 style={h1Style}>React Example</h1>
                <Variables />
            </div>
        );
    }
  }
  
  root.render(
    <App7 />
  );

  class SpreadOperator extends React.Component {
    componentDidMount() {
      //javaScript Array
      var varArray1=["num1", "num2"];
      var varArray2=["num3", "num4"];
  
      var sumVarArray=[];
      sumVarArray=sumVarArray.concat(varArray1, varArray2);
      console.log("1. sumVarArray : "+sumVarArray);
  
      //ES6 Array
      let sumLetArray=[varArray1, varArray2];
      console.log("2. sumLetArray : "+sumLetArray);
  
      let letArray=["num1", "num2", "num3", "num4"];
      let [sum1, sum2, ...remain]=letArray;
      console.log("3. sum1 : "+sum1+", sum2 : "+sum2+", remain : "+remain)
  
      // JavaScript Object
      var varObj1={key1: "var1", key2: "var2"};
      var varObj2={key2: "new2", key3: "var3"};
      var sumVarObj={};
  
      sumVarObj=Object.assign(sumVarObj, varObj1, varObj2);
      // console.log("4. sumVarObj : "+sumVarObj);
      console.log("4. sumVarObj : "+JSON.stringify(sumVarObj));
  
      // ES6 Object
      let sumLetObj={...varObj1, ...varObj2};
      console.log("5. sumLetObj : "+JSON.stringify(sumLetObj));
  
      let {key1, key3, ...others}=sumLetObj;
      console.log("6. key1 : "+key1+", key3 : "+key3+", others : "+JSON.stringify(others));
    }
  
    render() {
      let h2Style={
          fontSize: 16,
          fontWeight: "normal"
      };
      return(
          <h2 style={h2Style}>This is Spread Operator.</h2>
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
                <SpreadOperator />
            </div>
        );
    }
  }
  
  root.render(
    <App2></App2>
  )

  class ArrowFunction extends React.Component {
    constructor(props){
        super(props);
        this.state={
            arrowLabel: "React 18.2.0",
            num: 4
        };
    }
    componentDidMount(){
        function myFn1(num1){
            console.log(num1+". ES5 Function");
        }
        let myFn2= num1 => {
            console.log(num1+". Arrow Function");
        };
        
        myFn1(1);
        myFn2(2);
        this.myFn3(1, 2);
        this.myFn4();
        this.myFn5();
        this.myFn6(1, 2, 3);
    }
    myFn3=(num1, num2) => {
        let num3=num1+num2;
        console.log(num3+". Arrow Function : "+this.state.arrowLabel);
    };
    myFn4(){
        var this_bind=this;
        setTimeout(function(){
            console.log(this_bind.state.num+". ES5 Callback Function No Bind");
            // console.log(this.state.arrowLabel);
        }, 100);
    }
    myFn5(){
        setTimeout(function(){
            console.log("5. ES5 Callback Function Bind : "+this.state.arrowLabel);
        }.bind(this), 100);
    }
    myFn6=(num1, num2, num3) => {
        let num4=num1+num2+num3;
        setTimeout(() => {
            console.log(num4+". Arrow Callback Function : "+this.state.arrowLabel);
        }, 100);
    };
    render(){
        let h2Style={
            fontSize: 16,
            fontWeight: "normal"
        };
        return(
            <h2 style={h2Style}>This is Arrow Function.</h2>
        );
    }
 }
 class App extends React.Component {
    render(){
        let h1Style={
            fontWeight: "normal"
        }
        return(
            <div>
                <h1 style={h1Style}>React Example</h1>
                <ArrowFunction />
            </div>
        );
    }
 }

 root.render(
    <App />
 );

 class ForEach extends React.Component {
    componentDidMount() {
      let forArray=[3, 2, 8, 8];
      let forNewArray=[];
      for(let i=0; i<forArray.length; i++){
        forNewArray.push(forArray[i]);
      }
  
      let forEachArray=[3, 2, 8, 8];
      let forEachNewArray=[];
      forEachArray.forEach(result => {
          // console.log(result);
          forEachNewArray.push(result);
      });
      console.log("2. forEachNewArray : ["+forEachNewArray+"]");
    }
  
    render(){
      let h2Style={
          fontSize: 16,
          fontWeight: "normal"
      };
      return(
          <h2 style={h2Style}>This is ForEach Function.</h2>
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
                <ForEach />
            </div>
        );
    }
  }
  
  root.render(
    <App3 />
  )

  class Map extends React.Component {
    componentDidMount() {
      let mapArray = [3, 2, 8, 8];
      let mapNewArray = mapArray.map(x => x);
      console.log("1. mapNewArray : ["+mapNewArray+"]")
  
      let mapMultiArray=mapArray.map(x => x*2);
      console.log("2. mapMultiArray : ["+mapMultiArray+"]");
  
      let objArray=[
          {key: "React", value: "18.2.0"},
          {key: "UI", value: "Interaction"}
      ]
  
      let mapObjArray=objArray.map((obj, index) => {
        console.log((index+3)+". obj : "+JSON.stringify(obj));
        let mapReturnObj={};
        mapReturnObj[obj.key]=obj.value;
  
        return mapReturnObj;
      });
      console.log("5. mapObjArray : "+JSON.stringify(mapObjArray));
    }
    render(){
      let h2Style={
          fontSize: 16,
          fontWeight: "normal"
      };
      return(
          <h2 style={h2Style}>This is Map Function.</h2>
      );
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
                <Map />
            </div>
        );
    }
  }
  
  root.render(
    <App4></App4>
  )