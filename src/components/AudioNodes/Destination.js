import React, {Component} from 'react'
import { Group, Text } from 'react-konva'
import { Destination as shape } from 'constants/audio'
import AudioNodeHelper from 'lib/AudioNodeHelper'
import audioContext from 'lib/audioContext'
import cache from 'lib/cache'
import Connector from 'components/Connector'
import Box from 'components/Box'

class Destination extends Component{
  componentWillMount() {
    const { id } = this.props
    cache.nodes[id] = audioContext.destination
  }

  componentWillUnmount() {
    const { id } = this.props
    delete cache.nodes[id]
  }
  render() {
    const helper = this.constructor.helper
    const connector = helper.getInputPosition(0)
    return (
      <Group>
        <Box width={helper.width} height={helper.height}>
          <Text text="Output"/>
        </Box>
        <Connector x={connector.x} y={connector.y}/>
      </Group>
    )
  }

  static helper = new AudioNodeHelper(shape)
}

export default Destination