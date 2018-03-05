import { connect } from 'react-redux'
import { updateNode } from 'actions/nodes'
import Node from 'components/Node'
import toJS from './toJS'


const mapStateToProps = (state, ownProps) => ({node: state.getIn(['nodes', ownProps.id])})
const mapDispatchToProps = (dispatch, ownProps) => ({
  updateNode: (props) => dispatch(updateNode(ownProps.id, props))
})
export default connect(mapStateToProps, mapDispatchToProps)(toJS(Node))