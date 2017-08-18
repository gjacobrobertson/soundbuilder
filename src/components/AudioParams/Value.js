import React, { Component } from 'react'
import { Group, Text } from 'react-konva'
import Node from 'components/Node'
import Connector from 'components/Connector'

const width=100
const height=20

const helper = {
  getOutputPosition: _ => ({x: width / 2, y: height + 6})
}

class Value extends Component {
  render() {
    const { x, y, value } = this.props
    const { x: cx, y: cy } = helper.getOutputPosition()
    return (
      <Group x={x} y={y}>
        <Node width={width} height={height}>
          <Text text={value}/>
        </Node>
        <Connector x={cx} y={cy}/>
      </Group>
    )
  }

  static helper = helper
}

export default Value