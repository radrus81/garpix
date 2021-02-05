import { connect } from 'react-redux'
import SnackbarsInfo from '../components/Modals/SnackbarsInfo'
import { closeSnackbarsInfo } from '../store/actions/actionSnackbarsInfo'

const mapStateToProps = (state) => ({
  isShowSnackbarsInfo: state.shackbars.isShowSnackbarsInfo,
  message: state.shackbars.message,
  messageStyle: state.shackbars.messageStyle,
})

const mapDispatchToProps = (dispatch) => ({
  closeSnackbarsInfo: () => dispatch(closeSnackbarsInfo()),
})

export default connect(mapStateToProps, mapDispatchToProps)(SnackbarsInfo)
