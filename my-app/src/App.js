import React from 'react';
import './App.css';
import AddTodo from './components/addTodo';
import TodoList from './components/todoList';
import VisibilityFilter from './components/visibilityFilter';
import { Provider } from 'react-redux'
import store from './redux/store'

const filters = ['All', 'Active', 'Completed']

function App() {
  return (
    <Provider store = {store}>
    <div className = "App">
      <h1>Todo-List</h1>
      <AddTodo />
      <TodoList todos={[{content: 'Task 1'}, {content: 'Task 2'}]} />
      <VisibilityFilter filters = {filters} />
    </div>
    </Provider>
  );
}

export default App;
