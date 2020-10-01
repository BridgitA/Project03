import React from 'react';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList.js'

function App(){
    return(
        <div>
            <AddTodo />
            <VisibleTodoList />
        </div>
    )
}

export default App