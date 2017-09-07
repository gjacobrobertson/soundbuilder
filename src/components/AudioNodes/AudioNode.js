import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Group } from 'react-konva'
import * as audioConstants from 'constants/audio'
import audioContext from 'lib/audioContext'
import cache from 'lib/cache'
import AudioNodeHelper from 'lib/AudioNodeHelper'
import Box from 'components/Box'
import Connector from 'components/Connector'

class AudioNode extends Component {
  constructor(props) {
    super(props)
    this._onDragMove = this._onDragMove.bind(this)
  }
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
    const { id, onInit, node: { nodeType }} = this.props
    this.node = audioContext[`create${nodeType}`]()
    cache.nodes[id] = this.node
    const shape = audioConstants[nodeType]
    this.params = shape.params
    this.helper = new AudioNodeHelper(shape)
    onInit(this.node)
  }

  _updateAudio() {
    this.props.onUpdate(this.node)
  }

  _destroyAudio() {
    const { id, onDestroy } = this.props
    delete cache.nodes[id]
    this.node.disconnect()
    onDestroy(this.node)
  }

  _onDragMove(e) {
    this.props.setPosition(e.target.getAbsolutePosition())
  }

  render() {
    const {children} = this.props
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
      <Group>
        <Box width={width} height={height}>
          {children}
        </Box>
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