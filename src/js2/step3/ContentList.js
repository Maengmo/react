import React, { Component } from 'react';

class ContentList extends React.Component {
    render() {
        return (
            <div id={this.props.id}>{this.props.children}</div>
        );
    }
}

export default ContentList;