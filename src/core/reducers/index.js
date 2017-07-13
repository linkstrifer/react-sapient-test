import { combineReducers } from 'redux';

import queries from './queries'
import ui from './ui'
import defaults from './defaults'

const configuration = combineReducers({
  queries,
  ui,
  defaults
});

export default configuration;
