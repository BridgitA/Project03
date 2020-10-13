import React from 'react'

function Todo({onClick, completed, text, deleteTodo}) {
    return(
        <li
            onClick = {onClick}
            style = {{
                textDecoration: completed ? 'line-through' : 'none'
            }}
        >
            {text}
            
        </li>
    )

}

export default Todo;