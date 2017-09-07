import { handleActions } from 'redux-actions'
import { Map, fromJS } from 'immutable'
import { nodes } from './initial'

const initialState = Map(fromJS(nodes).map(node => [node.get('id'), node]))

export default handleActions({
  NODE_SET_POS: (state, { payload: { id, x, y} } ) => state.mergeIn([id], {x, y})
}, initialState)