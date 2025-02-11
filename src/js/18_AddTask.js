import React, { Component } from 'react';
import AddTaskList from './19_AddTaskList';

class AddTask extends React.Component {
    render() {
        let inputStyle = {
            marginTop : 20,
            padding: "0px 10px",
            width: 125,
            lineHeight: "32px",
            fontSize : 14,
            border: "1px solid #ccc"
        };
        let buttonStyle = {
            margin: "20px 0px 0px 5px",
            padding: 10,
            fontSize: 14,
            backgroundColor: "#999",
            color: "#fff",
            border: "none",
            cursor: "pointer"
        };

        return (
            <div className="main">
                <div className="header">
                    <form>
                        <input type="text" placeholder='Add Task' style={inputStyle}>
                        </input>
                        <button type="submit" style={buttonStyle}>Added</button>
                    </form>
                </div>
            </div>
        )
    }
}

// export default AddTask;

class AddTask2 extends React.Component {
    addTask(e) {
        e.preventDefault();
        console.log(this._input.value);
    }

    render() {
        let inputStyle={
            marginTop: 20,
            padding: "0px 10px",
            width: 125,
            lineHeight: "32px",
            fontSize: 14,
            border: "1px solid #ccc"
        };
        let buttonStyle={
            margin: "20px 0px 0px 5px",
            padding: 10,
            fontSize: 14,
            backgroundColor: "#999",
            color: "#fff",
            border: "none",
            cursor: "pointer"
        };

        return (
            <div className='main'>
                <div className="header">
                    <form onSubmit={this.addTask.bind(this)}>
                        <input type='text' placeholder='Add Task' style={inputStyle} 
                        ref={
                            function(e) {
                                this._input=e;
                            }.bind(this)
                        }
                        ></input>
                        <button type='submit' style={buttonStyle}>Added</button>
                    </form>
                </div>
            </div>
        )
    }
}

// export default AddTask2;

class AddTask3 extends React.Component {
    constructor() {
        super();

        this.state = {
            tasks: []
        }
    }

    addTask = e => {
        e.preventDefault();

        let taskArray = this.state.tasks;

        if(this._input.value != '') {
            taskArray.push(
                {
                    key: Date.now(),
                    msg: this._input.value
                }
            );
        }

        console.log(taskArray);
    };

    render() {
        let inputStyle={
            marginTop: 20,
            padding: "0px 10px",
            width: 125,
            lineHeight: "32px",
            fontSize: 14,
            border: "1px solid #ccc"
        };
        let buttonStyle={
            margin: "20px 0px 0px 5px",
            padding: 10,
            fontSize: 14,
            backgroundColor: "#999",
            color: "#fff",
            border: "none",
            cursor: "pointer"
        };

        return (
            <div className="main">
                <div className="header">
                    <form onSubmit={this.addTask}>
                        <input
                            type="text"
                            placeholder="Add Task"
                            style={inputStyle}
                            ref={e => this._input=e}
                        >
                        </input>
                        <button type="submit" style={buttonStyle}>Added</button>
                    </form>
                </div>
            </div>
        )
    }
}

// export default AddTask3;

class AddTask4 extends React.Component {
    constructor() {
        super();
        
        this.state = {
            tasks : []
        };
    }

    addTask = e => {
        e.preventDefault();

        let taskArray = this.state.tasks;

        if(this._input.value !='') {
            taskArray.push(
                {
                    key: Date.now(),
                    msg: this._input.value
                }
            );
        }
        this.setState({
            tasks: taskArray
        });
    }
    
    render() {
        let inputStyle={
            marginTop: 20,
            padding: "0px 10px",
            width: 125,
            lineHeight: "32px",
            fontSize: 14,
            border: "1px solid #ccc"
        };
        let buttonStyle={
            margin: "20px 0px 0px 5px",
            padding: 10,
            fontSize: 14,
            backgroundColor: "#999",
            color: "#fff",
            border: "none",
            cursor: "pointer"
        };
        let liStyle={
            marginTop: 10
        }

        let data = this.state.tasks;

        let listTasks = data.map(function(task) {
            return <li key={task.key} style={liStyle}>{task.msg}</li>
        })

        return (
            <div className='main'>
                <div className='header'>
                    <form onSubmit={this.addTask}>
                    <input
                            type="text"
                            placeholder="Add Task"
                            style={inputStyle}
                            ref={e => this._input=e}
                        >
                        </input>
                        <button type="submit" style={buttonStyle}>Added</button>
                        <ul>
                            {listTasks}
                        </ul>
                    </form>
                </div>
            </div>
        )
    }
}

// export default AddTask4;

class AddTask5 extends React.Component {
    constructor() {
        super();

        this.state = {
            tasks : []
        }
    }

    addTask = e => {
        e.preventDefault();

        let taskArray = this.state.tasks;

        if(this._input.value != '') {
            taskArray.push({
                key: Date.now(),
                msg: this._input.value
            })
        }

        this.setState({
            tasks: taskArray
        })
    }
    render() {
        let inputStyle={
            marginTop: 20,
            padding: "0px 10px",
            width: 125,
            lineHeight: "32px",
            fontSize: 14,
            border: "1px solid #ccc"
        };
        let buttonStyle={
            margin: "20px 0px 0px 5px",
            padding: 10,
            fontSize: 14,
            backgroundColor: "#999",
            color: "#fff",
            border: "none",
            cursor: "pointer"
        }

        return (
            <div className='main'>
                <div className='header'>
                    <form onSubmit={this.addTask}>
                        <input type='text' placeholder='Add Task' style={inputStyle}
                        ref={e => this._input = e}>
                        </input>
                        <button type='submit' style={buttonStyle}>Added</button>
                        <AddTaskList propsValue={this.state.tasks} />
                    </form>
                </div>
            </div>
        )
    }
}

export default AddTask5;