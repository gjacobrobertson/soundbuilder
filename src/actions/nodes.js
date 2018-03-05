import { createAction } from 'redux-actions'

export const updateNode = createAction('NODE_UPDATE', (id, props) => ({id, props}))