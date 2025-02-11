import React, { Component } from 'react';

class ReturnMap extends React.Component {
    render() {
        let ulStyle= {
            marginTop: 15
        }
        let liStyle = {
            lineHeight: 1.8
        }
        let forArray = [
            <li key="1" style={liStyle}>React</li>,
            <li key="2" style={liStyle}>18.2.0</li>,
            <li key="3" style={liStyle}>Array Map</li>
        ];

        return (
            <ul style={ulStyle}>
                {forArray}
            </ul>
        )
    }
}

// export default ReturnMap;

class ReturnMap2 extends React.Component {
    render() {
        let ulStyle = {
            marginTop : 15
        };
        let liStyle = {
            lineHeight : 1.8
        };
        let forArray = [
            <li key="1" style={liStyle}>React</li>,
            <li key="2" style={liStyle}>18.2</li>,
            <li key="3" style={liStyle}>Array Map</li>
        ];
        let forNewArray = [];

        for(let i=0; i<forArray.length; i++) {
            forNewArray.push(forArray[i]);
        }

        return (
            <ul style={ulStyle}>
                {forNewArray}
            </ul>
        )
    }
}

// export default ReturnMap2;

class ReturnMap3 extends React.Component {
    render() {
        let ulStyle = {
            marginTop : 15
        }
        let liStyle = {
            lineHeight : 1.8
        }
        let forEachArray = [
            <li key="1" style={liStyle}>React</li>,
            <li key="2" style={liStyle}>18.2.0</li>,
            <li key="3" style={liStyle}>Array Map</li>
        ];
        let forEachNewArray = [];

        forEachArray.forEach(result => {
            forEachNewArray.push(result);
        });

        return (
            <ul style={ulStyle}>
                {forEachNewArray}
            </ul>
        )
    }
}

// export default ReturnMap3;

class ReturnMap4 extends React.Component {
    render() {
        let ulStyle = {
            marginTop : 15
        }
        let liStyle = {
            lineHeight : 1.8
        }
        let mapArray = [
            <li key="1" style={liStyle}>React</li>,
            <li key="2" style={liStyle}>18.2.0</li>,
            <li key="3" style={liStyle}>Array Map</li>
        ]
        let mapNewArray = mapArray.map(arrayVal => arrayVal);

        return (
            <ul style={ulStyle}>
                {mapNewArray}
            </ul>
        )
    }
}

export default ReturnMap4;

class ReturnMap5 extends React.Component {
    render() {
        let ulStyle = {
            marginTop : 15
        }
        let liStyle = {
            lineHeight : 1.8
        }
        let elementArray = [
            <li key="1" style={liStyle}>React</li>,
            <li key="2" style={liStyle}>18.2.0</li>,
            <li key="3" style={liStyle}>Array Map</li>
        ]

        return (
            <ul style={ulStyle}>
                {elementArray.map(arrayVal => arrayVal)}
            </ul>
        )
    }
}