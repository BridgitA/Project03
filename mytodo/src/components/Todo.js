import React from 'react'

const Todo = ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none',
      borderBottom: '1px solid black',
      display: 'flex',
      padding: '1rem',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      width: '100%',
      padding: '12px 20px',
      boxSizing: 'border-box',

    }}
  >

    {text}
  </li>
)

export default Todo