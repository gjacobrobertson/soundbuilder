import React, { Component } from 'react'
import { Group, Text } from 'react-konva'
import Box from 'components/Box'
import Connector from 'components/Connector'

const width=100
const height=20

const helper = {
  getOutputPosition: _ => ({x: width / 2, y: height + 6})
}

class Value extends Component {
  render() {
    const { node: { value  } } = this.props
    const { x, y} = helper.getOutputPosition()
    return (
      <Group>
        <Box width={width} height={height}>
          <Text text={value}/>
        </Box>
        <Connector x={x} y={y}/>
      </Group>
    )
  }

  static helper = helper
}

export default Value