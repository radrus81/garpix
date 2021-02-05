import { connect } from 'react-redux'
import SnackbarsInfo from '../../components/Modals/SnackbarsInfo'
import {
  showSnackbarsInfo,
  hideSnackbarsInfo,
} from '../../store/actions/actionSnackbarsInfo'

const mapStateToProps = (state) => ({
  isShowSnackbarsInfo: state.shackbars.isShowSnackbarsInfo,
  message: state.shackbars.message,
  messageStyle: state.shackbars.messageStyle,
})

const mapDispatchToProps = (dispatch) => ({
  showSnackbarsInfo: () => dispatch(showSnackbarsInfo()),
  hideSnackbarsInfo: () => dispatch(hideSnackbarsInfo()),
})

export default connect(mapStateToProps, mapDispatchToProps)(SnackbarsInfo)
