import React, { Component } from 'react';
import ContentList from './ContentList';

class Content extends React.Component {
    render() {
        return (
            <div className='content'>
                <ContentList id="area1">content1</ContentList>
                <ContentList id="area2">content2</ContentList>
                <ContentList id="area3">content3</ContentList>
                <ContentList id="area4">content4</ContentList>
                <ContentList id="area5">content5</ContentList>
                <ContentList id="area6">content6</ContentList>
                <ContentList id="area7">content7</ContentList>
                <ContentList id="area8">content8</ContentList>
            </div>
        )
    }
}

export default Content;