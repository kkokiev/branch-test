import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { loadState, saveState } from './localstorage';
import reducer from './modules/root-reducer';
import './index.css';
import App from './components/app';

const persistedState = loadState();

const store = createStore(
  reducer,
  persistedState
);

store.subscribe(() => {
  saveState(store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
