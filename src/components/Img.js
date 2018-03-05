import React, { Component } from 'react'
import { Image } from 'react-konva'

class Img extends Component {
  constructor(props) {
    super(props)
    this.state = {
      image: null
    }
  }
  componentDidMount() {
    const image = new window.Image()
    image.src = this.props.src
    image.onload = () => this.setState({image})
  }

  componentWillReceiveProps(nextProps) {
    const image = new window.Image()
    image.src = nextProps.src
    image.onload = () => this.setState({image})
  }

  render() {
    return <Image {...this.props} image={this.state.image}/>
  }
}
export default Img