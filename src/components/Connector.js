import React from 'react'
import { Circle } from 'react-konva'

const radius = 6

const Connector = ({x, y}) => {
  return <Circle radius={radius} x={x} y={y} stroke='black'/>
}

export default Connector