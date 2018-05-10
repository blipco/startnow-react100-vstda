import React, { Component } from 'react';
import Edit from './edit.jsx';
import View from './view.jsx';

class Todolist extends Component {
    
    constructor(props) {
        super(props);
    };


    render() {
        if (this.props.todos.length == 0) {
            return (
                <div className="card">
                    <div className="card-header pb-0">
                        <p>View ToDos</p>
                    </div> {/* card-header */}
                    <div className="card-body" id="welcome-body">
                        <p  className="font-weight-bold" 
                            id="welcome-text">
                            Welcome to Very Simple ToDo App!
                        </p>
                        <p id="welcometext">
                            Get start now by adding a new ToDo on the left.
                        </p>
                    </div> {/* card-body */}
                </div> // card
            )
        } 
        else { 
            return (
                <div className="card">
                    <div className="card-header pb-0">
                        <p>View ToDos</p>
                    </div> {/* card-header */}
                        {this.props.todos.map(todo => (  
                            todo.editEnabled === true 
                            ? <Edit 
                                key={todo.date}
                                todo={todo}
                                editEnabled={todo.editEnabled}
                                text={todo.text}
                                priority={todo.priority}
                                isChecked={todo.isChecked}
                                handleUpdateClick={this.props.handleUpdateClick}
                                handleDeleteTodo={this.props.handleDeleteTodo}/>
                            : <View 
                                key={todo.date}
                                todo={todo}
                                editEnabled={todo.editEnabled}
                                text={todo.text}
                                priority={todo.priority}
                                isChecked={todo.isChecked}
                                handleEditTodo={this.props.handleEditTodo}
                                handleDeleteTodo={this.props.handleDeleteTodo}/>
                        ))}
                </div> //card
            );
        };      
    };
};
export default Todolist;