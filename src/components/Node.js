import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Group, Circle } from 'react-konva'

import Context from '../containers/Context'

class Node extends Component {
  componentDidMount() {
    const { audioContext, type, onInit } = this.props
    this.node = audioContext[`create${type}`]()
    this.params = Object.keys(this.node).filter(k => this.node[k] instanceof AudioParam)
    this._updateParams()
    onInit(this.node)
  }

  componentDidUpdate() {
    const { onUpdate } = this.props
    this._updateParams()
    onUpdate(this.node)
  }

  componentWillUnmount() {
    const { onDestroy } = this.props
    this.node.disconnect()
    onDestroy(this.node)
  }

  _updateParams() {
    this.params.forEach(k => this.node[k].value = this.props[k])
  }

  onDragStart() {
    console.log(arguments)
  }

  onDragEnd() {
    console.log(arguments)
  }

  render() {
    const {x, y, children} = this.props
    return (
      <Group x={x} y={y} draggable={true}
          onDragStart={this.onDragStart.bind(this)}
          onDragEnd={this.onDragEnd.bind(this)}>
        <Circle {...this.props}
          x={0}
          y={0}
          radius={20}
          stroke='red'>
        </Circle>
        {children}
      </Group>
    )
  }

  static propTypes = {
    audioContext: PropTypes.instanceOf(AudioContext).isRequired,
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

export default Context(Node)