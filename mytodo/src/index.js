import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'
import App from './components/App'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Contact from './components/Contact'
import './style.css'

const store = createStore(rootReducer)

render(
  <Provider store={store}>
    <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path='/todos' component={App} />
      <Route path='/contact' component={Contact} />

    </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
