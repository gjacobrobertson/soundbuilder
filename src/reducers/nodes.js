import { handleActions } from 'redux-actions'
import { Map, fromJS } from 'immutable'
import { nodes } from './initial'

const initialState = Map(fromJS(nodes).map(node => [node.get('id'), node]))

export default handleActions({
  NODE_UPDATE: (state, { payload: { id, props } }) => state.mergeIn([id], props)
}, initialState)