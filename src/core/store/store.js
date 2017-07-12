import { createStore, applyMiddleware } from 'redux';
import configuration from '../reducers/index';

const store = createStore(configuration, middleware);

export default store;
