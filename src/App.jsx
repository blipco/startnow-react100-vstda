import React, { Component } from 'react';
import Form from './form.jsx';
import Todolist from './todolist.jsx';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: "",
      priority: "",
      todos: []
      };
      this.handleChangeText = this.handleChangeText.bind(this);
      this.handleChangePriority = this.handleChangePriority.bind(this);
      this.handleAddClick = this.handleAddClick.bind(this);
      this.handleEditTodo = this.handleEditTodo.bind(this);
      this.handleUpdateClick = this.handleUpdateClick.bind(this);
      this.handleDeleteTodo = this.handleDeleteTodo.bind(this);
  };

  handleChangeText(event) {
    this.setState({text: event.target.value});
  };

  handleChangePriority(event) {
    this.setState({priority: event.target.value});
  };

  handleEditTodo(event) {
    var todosTodos = [...this.state.todos];
    var correctTodo = todosTodos.find(todo => todo.date == event.target.name);
    correctTodo.editEnabled = true;
    this.setState({todos: todosTodos});
  };

  handleDeleteTodo(event) {
    var deleteTodo = [...this.state.todos];
    var rightTodo = deleteTodo.find(todo => todo.date == event.target.name);
    deleteTodo.splice(rightTodo, 1);
    this.setState({todos: deleteTodo});
  };

  handleAddClick(event) {
    var {text, priority, todos} = this.state;
    var date = Date.now();
    var newTodo = {
      date,
      text,
      priority,
      editEnabled: false,
      isChecked: false
    };
    var allTodos = [...this.state.todos];
    allTodos.push(newTodo);
    this.setState({todos: allTodos, text:"", priority:""});
  };
     
  handleUpdateClick(event, editTodo) {
    console.log(editTodo);
    var everyTodo = [...this.state.todos];
    var rightyTodo = everyTodo.find(todo => todo.date == event.target.name);
    rightyTodo.editEnabled = false;
    rightyTodo.text = editTodo.text;
    rightyTodo.priority = editTodo.priority;
    if(rightyTodo.date == everyTodo.date) {
      everyTodo.replace(everyTodo.text, rightyTodo.text);
      everyTodo.replace(everyTodo.priority, rightyTodo.priority);
    };
    
    this.setState({todos: everyTodo, text:"", priority:""});
  };

  
  
  render() {
    return (
      <div className="container">
        <h2 className="text-white">Very Simple To Do App</h2>
        <p className="text-white">Track All of The Things</p>
        <hr/>
        <div className="row">
          <div className="col-4">
            <Form todos={this.state.todos}
                  text={this.state.text}
                  priority={this.state.priority}
                  handleChangeText={this.handleChangeText}
                  handleChangePriority={this.handleChangePriority}
                  handleAddClick={this.handleAddClick}/>
          </div> {/* col-4 */}
          <div className="col-8">
            <Todolist todos={this.state.todos}
                      editedTodo={this.state.editedTodo}
                      editEnabled={this.state.editEnabled}
                      text={this.state.text}
                      isChecked={this.state.todos.isChecked}
                      priority={this.state.priority}
                      handleChangeText={this.handleChangeText}
                      handleChangePriority={this.handleChangePriority}
                      handleEditTodo={this.handleEditTodo}
                      handleUpdateClick={this.handleUpdateClick}
                      handleAddClick={this.handleAddClick}
                      handleDeleteTodo={this.handleDeleteTodo}
                      handleUpdateText={this.handleUpdateText}
                      handleUpdatePriority={this.handleUpdatePriority}/>
          </div>  {/* col-8 */}
        </div>  {/* row */}
      </div>//container
    );
  };
};

export default App;
