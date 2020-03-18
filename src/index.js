import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {loadState, saveState}  from './reducers/localStore';
import {rootReducer} from './reducers/index';

const store = createStore(rootReducer, loadState(), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(() => saveState(store.getState()))

ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>, document.getElementById('root')
);

serviceWorker.unregister();
