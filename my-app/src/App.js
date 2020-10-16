import React, { Component } from 'react';
import Todos from './components/Todos';
import AddTodo from './AddTodo';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'Grocery shopping'},
      {id: 2, content: 'Get homework done'}
    ]
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !==id
    });
    this.setState({
      todos
    }) 
  }
  addTodo = (todo) => {
    todo.id = Math.random()
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    })
  }
  render() {
    return(
      <BrowserRouter>
      <div className='todo-app container'>
        <Navbar /><br></br><br></br>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
      </BrowserRouter>
    )
  }

}


export default App;
