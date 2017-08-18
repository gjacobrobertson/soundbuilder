import React, { Component } from 'react'
import * as audioConstants from 'constants/audio'
import cache from 'lib/cache'
import * as Nodes from 'components/Nodes'
import Link from './Link'

class ValueToParam extends Component {
  componentDidMount () {
    const { from, to } = this.props
    this.destination = cache.nodes[to.id]
    this.param = audioConstants[to.node.nodeType].params[to.param]
    this.destination[this.param].value = from.node.value
  }

  componentDidUpdate () {
    const { from } = this.props
    this.destination[this.param].value = from.node.value
  }

  componentWillUnmount () {
    this.param.value = this.param.defaultValue
  }

  render() {
    const { from, to } = this.props
    const Source = Nodes[from.node.nodeType]
    const Destination = Nodes[to.node.nodeType]
    let { x: x1, y: y1 } = from.node
    let { x: dx1, y: dy1 } = Source.helper.getOutputPosition()
    let { x: x2, y: y2 } = to.node
    let { x: dx2, y: dy2 } = Destination.helper.getParamPosition(to.param)
    return <Link x1={x1 + dx1} y1={y1 + dy1} x2={x2 + dx2} y2={y2 + dy2} />
  }
}

export default ValueToParam