import React from 'react'
import { Stage } from 'react-konva'
import Nodes from 'containers/Nodes'
import Links from 'containers/Links'

const App = () => 
  <Stage width={window.innerWidth} height={window.innerHeight} draggable={true}>
    <Nodes />
    <Links />
  </Stage>

export default App
