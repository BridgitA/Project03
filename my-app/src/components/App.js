import React from 'react';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import 'bootstrap/dist/css/bootstrap,min.css'

const App = () => (
    <div>
        <h1>Todo-List</h1>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </div>
    
)

export default App;