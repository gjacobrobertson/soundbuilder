import { connect } from 'react-redux'
import { setPosition } from 'actions/nodes'
import Node from 'components/Node'
import toJS from './toJS'


const mapStateToProps = (state, ownProps) => ({node: state.getIn(['nodes', ownProps.id])})
const mapDispatchToProps = (dispatch, ownProps) => ({
  setPosition: ({x, y}) => dispatch(setPosition(ownProps.id, x, y))
})
export default connect(mapStateToProps, mapDispatchToProps)(toJS(Node))