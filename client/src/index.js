// index.js is the root file set by create-react-app library
// React application basic flow:
// => React Components, calls Action Creator, produces Action, sent to reducers through Redux Thunk
// => Update state in store, State sent back to components causing them to rerender
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // Provider is a component to wire up Redux store and React components
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk'; // Redux Thunk is a middleware used to manage action and state etc.

import App from './components/App';
import reducers from './reducers';

// Create Redux store
// 1st argument is all the reducers
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}><App /></Provider>, // hook App component into Provider component
  document.querySelector('#root')
);
