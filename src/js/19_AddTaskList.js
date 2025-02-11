import React, { Component } from 'react';

class AddTaskList extends React.Component {
    render() {
        let liStyle={
            marginTop: 10
        }
        let data=this.props.propsValue;

        let listTasks = data.map(task => {
            let date = new Date(task.key);
            let formattedDate = `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일 ` +
                                `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
        
            return (
                <li key={task.key} style={liStyle}>
                    {task.msg} ({formattedDate})
                </li>
            );
        });

        return (
            <ul>
                {listTasks}
            </ul>
        )
    }
}

export default AddTaskList;