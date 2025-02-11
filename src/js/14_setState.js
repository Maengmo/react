import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

class SetState extends React.Component {
    constructor() {
        super();

        this.state = {
            comment: "Original State"
        }
    }

    modifyComment=() => {
        this.setState({
            comment: "Change State"
        });
    };
    render(){
        let buttonStyle={
            marginTop: 20,
            padding: 10,
            fontSize: 14,
            backgroundColor: "#999",
            color: "#fff",
            border: "none",
            cursor: "pointer"
        };
        return (
            <div>
                <p>{this.state.comment}</p>
                <button onClick={this.modifyComment} style={buttonStyle}>Modify Comment</button>
            </div>
        );
    }
}

export default SetState;