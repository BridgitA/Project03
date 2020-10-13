import React from 'react'

const Reminder = props => {
    return (
        <div>
            <li>{props.reminder}</li>
            <button>Delete</button>
        </div>
    )
}

export default Reminder;