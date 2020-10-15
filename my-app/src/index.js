import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import showResults from './showResults';
import ContactForm from './ContactForm';
import rootReducer from './reducers';
import App from './components/App';


const store = createStore(rootReducer)

render(
  <Provider store = { store }>
    <div style = {{padding: 15 }}>
      <h2>Contact Form</h2>
      <ContactForm onSubmit = {showResults} />
    </div>
    <App />
  </Provider>,
  document.getElementById('root')
);
