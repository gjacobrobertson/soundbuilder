import React from 'react'
import { Group, Line, Circle } from 'react-konva'


const Link = ({x1, y1, x2, y2}) => (
  <Group>
    <Circle radius={4} fill='black' x={x1} y={y1} />
    <Circle radius={4} fill='black' x={x2} y={y2} />
    <Line stroke='black' points={[x1, y1, x2, y2]}/>
  </Group>
)

export default Link