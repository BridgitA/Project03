import React from 'react';
import { connect } from 'react-redux';
import DeleteTodo from '../containers/DeleteTodo';

const RemoveToDo = ({ onClick, completed }) => (
    <li
        onClick = {onClick}
        style = {{
            
        }}
    >
       <span><button type = "button">Delete</button></span>
       <DeleteTodo />
    </li>
)
      
    export default connect()(RemoveToDo)
