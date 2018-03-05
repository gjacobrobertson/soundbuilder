import React from 'react'
import { connect } from 'react-redux'
import { Layer } from 'react-konva'
import toJS from './toJS'
import Node from './Node'

const Nodes = ({nodes}) => (
  <Layer zIndex={1}>
    { nodes.map(node => (
      <Node key={node} id={node} />
    ))}
  </Layer>
)

const mapStateToIds = state => ({nodes: state.get('nodes').keySeq()})
export default connect(mapStateToIds)(toJS(Nodes))