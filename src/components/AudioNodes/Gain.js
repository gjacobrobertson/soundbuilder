import React, { Component } from 'react'
import { Text } from 'react-konva'
import { Oscillator as shape } from 'constants/audio'
import AudioNodeHelper from 'lib/AudioNodeHelper'
import AudioNode from './AudioNode'


class Oscillator extends Component {
  static helper = new AudioNodeHelper(shape)
  
  render () {    
    return (
      <AudioNode {...this.props} nodeType='Gain'>
        <Text text='gain'/>
      </AudioNode>
    )
  }
}

export default Oscillator