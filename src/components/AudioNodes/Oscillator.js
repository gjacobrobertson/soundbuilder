import React, { Component } from 'react'
import { Text } from 'react-konva'
import { Oscillator as shape } from 'constants/audio'
import AudioNodeHelper from 'lib/AudioNodeHelper'
import AudioNode from './AudioNode'


class Oscillator extends Component {
  static helper = new AudioNodeHelper(shape)
  
  render () {
    const onInit = (node) => {
      node.start()
    }

    const onUpdate = (node) => {
      node.type = this.props.type || 'sine'
    }

    const onDestroy = (node) => {
      node.stop()
    }
    
    return (
      <AudioNode {...this.props} nodeType="Oscillator" onInit={onInit} onDestroy={onDestroy} onUpdate={onUpdate}>
        <Text text={this.props.type || 'sine'}/>
      </AudioNode>
    )
  }
}

export default Oscillator