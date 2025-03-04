import React, { Component } from 'react';

class Component2_1 extends React.Component {
    render() {
        return (
            <div className='logo'>
                <a href=''>
                    {this.props.propsValue}
                </a>
            </div>
        )
    }
}

export default Component2_1;