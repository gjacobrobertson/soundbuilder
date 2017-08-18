import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Group } from 'react-konva'
import * as audioConstants from 'constants/audio'
import audioContext from 'lib/audioContext'
import cache from 'lib/cache'
import AudioNodeHelper from 'lib/AudioNodeHelper'
import Node from 'components/Node'
import Connector from 'components/Connector'

class AudioNode extends Component {
  componentWillMount() {
    this._initAudio();
    this._updateAudio();
  }

  componentDidUpdate() {
    this._updateAudio();
  }

  componentWillUnmount() {
    this._destroyAudio();
  }

  _initAudio() {
    const { nodeType, id, onInit } = this.props
    this.node = audioContext[`create${nodeType}`]()
    cache.nodes[id] = this.node
    const shape = audioConstants[nodeType]
    this.params = shape.params
    this.helper = new AudioNodeHelper(shape)
    onInit(this.node)
  }

  _updateAudio() {
    this.params.forEach(k => {
      if (k in this.props) {
        this.node[k].value = this.props[k]
      }
    })
    this.props.onUpdate(this.node)
  }

  _destroyAudio() {
    const { id, onDestroy } = this.props
    delete cache.nodes[id]
    this.node.disconnect()
    onDestroy(this.node)
  }


  render() {
    const {x, y, children} = this.props
    const {width, height} = this.helper
    const {numberOfInputs, numberOfOutputs} = this.node
    const inputs = Array(numberOfInputs).fill().map((_, i) => {
      const position = this.helper.getInputPosition(i)
      return <Connector key={`input_${i}`} {...position}/>
    })
    const outputs = Array(numberOfOutputs).fill().map((_, i) => {
      const position = this.helper.getOutputPosition(i)
      return <Connector key={`output_${i}`} {...position}/>
    })
    const params = this.params.map((param, i) => {
      const position = this.helper.getParamPosition(i)
      return <Connector key={param} {...position} />
    })
    
    return (
      <Group x={x} y={y}>
        <Node width={width} height={height}>
          {children}
        </Node>
        {inputs}
        {outputs}
        {params}
      </Group>
    )
  }

  static propTypes = {
    onInit: PropTypes.func,
    onUpdate: PropTypes.func,
    onDestroy: PropTypes.func,
  }

  static defaultProps = {
    onInit: () => {},
    onUpdate: () => {},
    onDestroy: () => {}
  }
}

export default AudioNode