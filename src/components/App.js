import React, { Component } from 'react'
import { Stage } from 'react-konva'
import Nodes from 'containers/Nodes'
import Links from 'containers/Links'

class App extends Component {
  render() {
    return (
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Nodes />
        <Links />
      </Stage>
    );
  }
}

export default App
