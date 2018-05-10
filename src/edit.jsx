import React, { Component } from 'react';
class Edit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            date: this.props.todo.date,
            text: "",
            priority: "",
            editEnabled: false,
            isChecked: false 
        };
        this.handleUpdateClick = this.handleUpdateClick.bind(this);
        this.handleUpdateText = this.handleUpdateText.bind(this);
        this.handleUpdatePriority = this.handleUpdatePriority.bind(this);
    };

    handleUpdateText(event) {
        this.setState({text: event.target.value});
    };
    
    handleUpdatePriority(event) {
        this.setState({priority: event.target.value});
    };

    handleUpdateClick(event) {
        var {date, text, priority, editEnabled, isChecked} = this.state;
        var editTodo = {
            date,
            text,
            priority,
            editEnabled,
            isChecked
        };
        this.props.handleUpdateClick(event, editTodo);
    };

    render() {
        var alertColor = "alert alert-";
            if (this.props.todo.priority == 1) {
                alertColor += "danger"
            }   else {
                    if (this.props.todo.priority == 2) {
                        alertColor += "warning"
                    }   else {
                            alertColor += "success"
                        }
                };
        return (
            <div className={`cardy-body ${alertColor} m-0`}>
                <p className="font-weight-bold">Description</p>
                <textarea   className="update-todo-text"
                            onChange={this.handleUpdateText}>
                </textarea>
                <p className="font-weight-bold">Priority</p>
                <select className="update-todo-priority w-50"
                        onChange={this.handleUpdatePriority}>
                    <option value="1">High Priority</option>
                    <option value="2">Medium Priority</option>
                    <option value="3">Low Priority</option>
                </select> <br />
                <div className="d-flex flex-row-reverse p-2">
                    <button className="update-todo btn btn-success"
                            name={this.props.todo.date}
                            onClick={this.handleUpdateClick}>
                            Save
                    </button>
                </div>{/* flex-row */}
            </div> //card body
        );
    };
};
export default Edit;