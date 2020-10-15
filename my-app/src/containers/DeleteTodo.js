import React from 'react';
import { connect } from 'react-redux';
import { deleteTodo } from '../actions';

const RemoveTodo = ({dispatch}) => {

    return (
        <div>
            <form 
                onClick = {e => {
                    e.preventDefault()
                    dispatch(deleteTodo())

                }}
            >
            </form>
            <span><button type = "submit">Delete</button></span>
        </div>
    )
}

export default connect()(RemoveTodo);

