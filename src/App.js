import React, { Component } from 'react';
import { Stage, Layer } from 'react-konva'
import Oscillator from './components/Oscillator';
import './App.css';

class App extends Component {
  render() {
    return (
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <Oscillator x={0} y={0} frequency={440} detune={100} />
        </Layer>
      </Stage>
    );
  }
}

export default App;
