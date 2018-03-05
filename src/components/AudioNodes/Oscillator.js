import React, { Component } from 'react'
import { Group } from 'react-konva'
import { Oscillator as shape } from 'constants/audio'
import AudioNodeHelper from 'lib/AudioNodeHelper'
import Img from 'components/Img'
import AudioNode from './AudioNode'
import chevronLeft from 'img/chevron-left.svg'
import chevronRight from 'img/chevron-right.svg'
import sine from 'img/Simple_sine_wave.svg'
import square from 'img/Square_wave.svg'
import sawtooth from 'img/Sawtooth_wave.svg'
import triangle from 'img/Triangle_wave.svg'

const waveTypes = [
  'sine',
  'square',
  'sawtooth',
  'triangle'
]

const waveSrc = {
  sine,
  square,
  sawtooth,
  triangle
}

class Oscillator extends Component {
  static helper = new AudioNodeHelper(shape)

  constructor(props) {
    super(props)
    this._prevType = this._setType.bind(this, -1)
    this._nextType = this._setType.bind(this, 1)
    this._onInit = this._onInit.bind(this)
    this._onUpdate = this._onUpdate.bind(this)
    this._onDestroy = this._onDestroy.bind(this)
  }
  
  _createImage(src) {
    const img = new window.Image();
    img.src = src
    return img
  }
  
  _setType (inc) {
    const { node: { type }, updateNode } = this.props;
    let idx = waveTypes.indexOf(type) + inc
    const n = waveTypes.length
    idx = ((idx % n) + n) % n
    updateNode({type: waveTypes[idx]})
  }

  _onInit (node) {
    node.start()
  }

  _onUpdate (node){
    node.type = this.props.node.type || 'sine'
  }

  _onDestroy = (node) => {
    node.stop()
  }

  render () {
    const { node } = this.props;
    return (
      <AudioNode {...this.props}
        onInit={this._onInit}
        onDestroy={this._onDestroy}
        onUpdate={this._onUpdate}>
        <Group ref="foo">
          <Img width={12} height={18} src={chevronLeft} onClick={this._prevType} />
          <Img x={24} width={36} height={18} src={waveSrc[node.type]} />
          <Img x={72} width={12} height={18} src={chevronRight} onClick={this._nextType} />
        </Group>
      </AudioNode>
    )
  }
}

export default Oscillator