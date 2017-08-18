import React from 'react'
import { connect } from 'react-redux'
import { Layer } from 'react-konva'
import * as components from 'components/Nodes'
import toJS from './toJS'

const createNode = node => {
  const Type = components[node.nodeType]
  return <Type key={node.id} {...node} />
}

const Nodes = ({nodes}) => (
  <Layer zIndex={2}>
    { nodes.map(createNode) }
  </Layer>
)

const mapStateToProps = state => ({nodes: state.get('nodes').valueSeq()})
export default connect(mapStateToProps)(toJS(Nodes))