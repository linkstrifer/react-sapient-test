import { createStore } from 'redux';
import configuration from '../reducers/index';

const store = createStore(
  configuration,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
