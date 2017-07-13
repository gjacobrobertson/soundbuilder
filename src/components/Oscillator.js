import React from 'react'
import Node from './Node'
import { Circle, Text } from 'react-konva'

const Oscillator = (props) => {
  const onInit = (node) => {
    node.connect(node.context.destination)
    node.start()
  }
  const onDestroy = (node) => {
    node.stop()
  }
  return (
    <Node {...props} type="Oscillator" onInit={onInit} onDestroy={onDestroy}>
      <Circle radius={5} stroke='blue'/>
      <Text text="Osc"/>
    </Node>
  )
}

export default Oscillator