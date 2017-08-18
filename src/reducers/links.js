import { handleActions } from 'redux-actions'
import { Map, fromJS } from 'immutable'
import uuid from 'uuid/v4'
import { links } from './initial'

const initialState = Map(fromJS(links).map(link => {
  const id = uuid()
  return [id, link.set('id', id)]
}))

export default handleActions({}, initialState)