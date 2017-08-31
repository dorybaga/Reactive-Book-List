import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import books from './reducers'
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';


const store = createStore(books);

ReactDOM.render(
  <Provider store={store}>
   <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
