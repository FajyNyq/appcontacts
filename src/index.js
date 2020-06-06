import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {
	createStore,
	combineReducers,
	applyMiddleware,
} from "redux";
import {Provider} from 'react-redux';
import thunkMiddleware from "redux-thunk";
import contactReducer from './reducers/contactReducer';
import todoReducers from './reducers/todoReducers';

const allreducers = combineReducers({
	contactReducer,
	todoReducers,
});
const store = createStore(
	allreducers,
	applyMiddleware(thunkMiddleware)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

