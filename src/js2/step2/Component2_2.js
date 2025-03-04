import React, { Component } from 'react';

class Component2_2 extends React.Component {
    constructor(props) {
        super();

        this.state= {
            navigationData : props.propsValue
        }
    }

    render() {
        let data = this.state.navigationData;

        let navigationList = data.map((d, i) => <li key={i+1}>
            <a href="">
                {d.menu}
            </a>
        </li>);

        return (
            <div className='navi'>
                <ul>
                    {navigationList}
                </ul>
            </div>
        )
    }
}

export default Component2_2;