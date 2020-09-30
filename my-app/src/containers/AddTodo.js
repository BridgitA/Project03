import React from 'react';
import { connect } from 'react-redux'

function AddTodo() {
    let input;
    return(
        <div>
            <form>
                <input type = 'text' placeholder = 'Task...' ref = {el => (input = el)} />
                <button type = 'submit'>Add</button>
            </form>
        </div>
    )
}

export default connect()(AddTodo);