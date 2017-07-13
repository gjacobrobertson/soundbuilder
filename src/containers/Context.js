import { connect } from 'react-redux'

const audioContext = new AudioContext()
const mapStateToProps = (_, ownProps) => ({...ownProps, audioContext})
export default connect(mapStateToProps)