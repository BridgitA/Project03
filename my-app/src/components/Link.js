import React from 'react'

function Link({active, onClick, children}){
    return(
        <button
            onClick = { onClick }
            disabled = { active }
        >
            {children}
        </button>
    )
}

export default Link;