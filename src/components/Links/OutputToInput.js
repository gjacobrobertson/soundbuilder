import React, { Component } from 'react'
import cache from 'lib/cache'
import * as Nodes from 'components/Nodes'
import Link from './Link'

class OutputToInput extends Component {
  componentDidMount () {
    const { from, to } = this.props
    this.source = cache.nodes[from.id]
    this.destination = cache.nodes[to.id]
    this.source.connect(this.destination, from.index, to.index)
  }

  componentWillUnmount () {
    const { from, to } = this.props
    this.source.disconnect(this.destination, from.index, to.index)
  }

  render() {
    const { from, to } = this.props
    const Source = Nodes[from.node.nodeType]
    const Destination = Nodes[to.node.nodeType]
    let { x: x1, y: y1 } = from.node
    let { x: dx1, y: dy1 } = Source.helper.getOutputPosition(from.index)
    let { x: x2, y: y2 } = to.node
    let { x: dx2, y: dy2 } = Destination.helper.getInputPosition(to.index)
    return <Link x1={x1 + dx1} y1={y1 + dy1} x2={x2 + dx2} y2={y2 + dy2} />
  }
}

export default OutputToInput