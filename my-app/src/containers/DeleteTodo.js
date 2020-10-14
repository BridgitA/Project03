import React from 'react';
import { connect } from 'react-redux';
import { deleteTodo } from '../actions';

const RemoveTodo = ({dispatch}) => {

    return (
        <div>
            <a 
                onClick = {e => {
                    e.preventDefault() 
                    dispatch(deleteTodo())

                }}
            >
               <button type = "submit">Delete</button>
            </a>
        </div>
    )
}

export default connect()(RemoveTodo);

