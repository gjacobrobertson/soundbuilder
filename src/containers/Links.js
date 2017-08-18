import React from 'react'
import { connect } from 'react-redux'
import { Layer } from 'react-konva'
import { createSelector } from 'reselect'
import { OutputToInput, OutputToParam, ValueToParam } from 'components/Links'
import toJS from './toJS'


const nodeSelector = state => state.get('nodes')
const linkSelector = state => state.get('links')
const appendNodeSelector = createSelector(
  nodeSelector,
  linkSelector,
  (nodes, links) => links.valueSeq().map(link => {
    const from = nodes.get(link.getIn(['from', 'id']))
    const to = nodes.get(link.getIn(['to', 'id']))
    return link.setIn(['from', 'node'], from).setIn(['to', 'node'], to)
  })
)

const connectionType = ({from, to}) => {
  if ('value' in from.node && 'param' in to) {
    return ValueToParam
  } else if ('param' in to) {
    return OutputToParam
  } else {
    return OutputToInput
  }
}

const createLink = link => {
  const Type = connectionType(link)
  return <Type key={link.id} {...link} />
}

const Links = ({links}) => (
  <Layer>
    { links.map(createLink) }
  </Layer>
)

const mapStateToProps = state => ({
  links: appendNodeSelector(state)
})
export default connect(mapStateToProps)(toJS(Links))