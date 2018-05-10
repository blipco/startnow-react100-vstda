import React, { Component } from 'react';

class Form extends Component {

    constructor(props) {
        super(props); 
    };

    render() {
        return (
            <div className="card">
                <div className="card-header pb-0">
                    <p>Add New To Do</p>
                </div>  {/* card-header */}
                <div className="card-body">
                    <p className="font-weight-bold">I want to..</p>
                    <textarea className="create-todo-text"
                              value={this.props.text}
                              onChange={this.props.handleChangeText}>
                    </textarea>
                    <p className="font-weight-bold">How Much of a Priority Is This?</p>
                    <select className="create-todo-priority w-100"
                            value={this.props.priority} 
                            onChange={this.props.handleChangePriority}>
                        <option>Select A Priority</option>
                        <option value="1" className="1">1</option>
                        <option value="2" className="2">2</option>
                        <option value="3" className="3">3</option>
                    </select>
                </div>  {/* card-body */}
                <div className="card-footer">
                    <button type="button" 
                            className="create-todo btn btn-success btn-block" 
                            onClick={this.props.handleAddClick}>
                            ADD 
                    </button>
                </div>  {/* card-footer */}
            </div>  //card
        )
    };
};
export default Form;