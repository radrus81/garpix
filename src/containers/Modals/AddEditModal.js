import { connect } from 'react-redux'
import AddEditModal from '../../components/Modals/AddEditModal'
import { closeAddEditModal } from '../../store/actions/actionModal'

const mapStateToProps = (state) => ({
  isOpenAddEditModal: state.addEditModal.isOpenAddEditModal,
  typeInfo: state.addEditModal.typeInfo,
})

const mapDispatchToProps = (dispatch) => ({
  closeAddEditModal: () => dispatch(closeAddEditModal()),
})

export default connect(mapStateToProps, mapDispatchToProps)(AddEditModal)
