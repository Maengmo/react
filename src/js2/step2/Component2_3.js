import React, { Component } from 'react';

class Component2_3 extends React.Component {
    constructor(props) {
        super();

        this.state = {
            snsData : props.propsValue 
        };
    }

    render() {
        let data = this.state.snsData;

        let snsList = data.map((d, i) => 
        <li key={i+1}>
            <a href='' className={"fa fa-" + d.icon} title={d.icon}></a>
        </li>)

        return (
            <div className='sns'>
                <ul className='clearfix'>
                    {snsList}
                </ul>
            </div>
        );
    }
}

export default Component2_3;