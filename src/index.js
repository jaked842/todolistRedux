import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { todoList } from './Redux/reducers';

const logger = createLogger();
const rootReducer = todoList;
const store = createStore(rootReducer, applyMiddleware(logger));

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider >
,
  document.getElementById('root')
);

