import { createAction } from 'redux-actions'

export const setPosition = createAction('NODE_SET_POS', (id, x, y) => ({id, x, y}))