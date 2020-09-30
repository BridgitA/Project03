import React from 'react'
import ReactDOM from 'react-dom'
import App from './component/App'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'



ReactDOM.render(
  <React.StrictMode><App /></React.StrictMode>,document.getElementById('root')
);

