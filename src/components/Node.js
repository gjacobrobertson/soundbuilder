import React, { Component } from 'react'
import { Group } from 'react-konva'
import * as Nodes from './Nodes'

class Node extends Component {
  constructor(props) {
    super(props)
    this._onDragMove = this._onDragMove.bind(this)
  }

  _onDragMove(e) {
    console.log(e)
    this.props.updateNode(e.target.getPosition())
  }

  render() {
    const { node: { nodeType, x, y } } = this.props
    const Type = Nodes[nodeType]
    return(
      <Group x={x} y={y} draggable={true} onDragMove={this._onDragMove}>
        <Type {...this.props}/>
      </Group>
    )
  }
}

export default Node