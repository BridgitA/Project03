import React from 'react'
import Todo from './Todo'


function TodoList({ todos, toggleTodo }) {
    return(
        <ul>
            {todos.map(todo => (
                <Todo />
            ))}
        </ul>
    )
}

export default TodoList;
