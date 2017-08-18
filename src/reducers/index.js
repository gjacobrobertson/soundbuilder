import { combineReducers } from 'redux-immutable'
import nodes from './nodes'
import links from './links'

const rootReducer = combineReducers({
  nodes,
  links
});

export default rootReducer;