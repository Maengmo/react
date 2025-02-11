import React, { Component } from 'react';

class DataComponent extends React.Component {
    render() {
        let ulStyle = {
            marginTop : 15
        }
        let liStyle = {
            lineHeight : 1.8
        }

        return (
            <ul style={ulStyle}>
                <li style={liStyle}>member1</li>
                <li style={liStyle}>member2</li>
                <li style={liStyle}>member3</li>
            </ul>
        )
    }
}

// export default DataComponent;

class DataComponent2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {loginData: props.loginData}
    }
    render() {
        let ulStyle={
            marginTop: 15
        };
        let liStyle={
            lineHeight: 1.8
        };
        let data=this.state.loginData;
        let dataList=data.map((d, i) => <li key={i+1} style={liStyle}>{d.name}, {d.age}</li>);
        return (
            <ul style={ulStyle}>
                {dataList}
            </ul>
        );
    }
}

export default DataComponent2;