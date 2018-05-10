import React, { Component } from 'react';

class View extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isChecked: false
        };
        this.handleCheckBox = this.handleCheckBox.bind(this);
    };   

    handleCheckBox(event) {
        this.setState({isChecked: !this.state.isChecked});
      };

    render() {
            var alertColor = "alert alert-"
            if (this.props.todo.priority == 1) {
                alertColor += "danger"
            } else if (this.props.todo.priority == 2) {
                    alertColor += "warning"
                } else {
                    alertColor += "success"
                }
                
        return (
            <ul className={`card-body ${alertColor} m-0`}>
                <li className="row">
                    <div className="col-1">
                        <input  className="check" 
                                name={this.props.todo.date}
                                type="checkbox"
                                onClick={this.handleCheckBox}>
                        </input>
                    </div> {/* col-1 */}
                    <div className="col-9">
                        <p  className={this.state.isChecked ? 
                            "strike-through font-weight-bold text-dark" : 
                            "font-weight-bold text-dark"}>
                            {this.props.todo.text}
                        </p>
                    </div> {/* col-9 */}
                    <div className="col-2">
                        <a  className="edit-todo fas fa-edit p-1 btn text-primary" 
                            name={this.props.todo.date} 
                            onClick={this.props.handleEditTodo}></a>
                        <a  className="delete-todo fas fa-trash-alt p-1 btn text-danger" 
                            name={this.props.todo.date} 
                            onClick={this.props.handleDeleteTodo}>
                       </a>
                    </div> {/* col-2 */}
                </li> {/* row */}
            </ul> //card-body
        )
    };
};
export default View;