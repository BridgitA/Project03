import React from 'react';

const Todo = ({ todo }) => <li>{todo.content}</li>

function TodoList({ todos }) {
    return(
        todos.map((todo, i) =>(
            <Todo key = {i} todo={todo} />
        ))
    )
    
}

export default TodoList;