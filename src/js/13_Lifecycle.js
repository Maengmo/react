import React, { Component } from 'react';
 class Lifecycle extends Component {
    constructor(props){
        super(props);
        this.state={};
        console.log("1. constructor()");
        console.log(props);
    }
    static getDerivedStateFromProps(props, state){
        console.log("2. getDerivedStateFromProps(). "+props.propValue);
        return {tempState1: props.propValue};
    }
    componentDidMount(){
        console.log("4. componentDidMount()");
        console.log("5. tempState1 : "+this.state.tempState1);
        this.setState({tempState2: true});
    }
    shouldComponentUpdate(props, state){
        console.log("6. shouldComponentUpdate(), tempState2 : "+state.tempState2);
        return state.tempState2;
        // return false;
    }
    render(){
        console.log("3. render()");
        return (
            <h2>This is Render Function.</h2>
        );
    }
 }
 
 export default Lifecycle;