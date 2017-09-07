import React, { Component } from 'react'
import { Group, Rect } from 'react-konva'

class Box extends Component {
  componentDidMount() {
    let children = this.refs.children
    let { width, height } = children.getClientRect();
    children.setOffset({ x: width / 2, y: height / 2})
  }

  render() {
    const {x = 0, y = 0, width, height, children} = this.props
    const dimensions = { width, height }
    const bounds = {x, y, ...dimensions }
    return (
      <Group {...bounds} >
        <Rect {...dimensions }
          stroke='black'
          fill='gray'>
        </Rect>
        <Group ref='children' x={width / 2} y = {height / 2}>
          {children}
        </Group>
      </Group>
    )
  }
}

export default Box