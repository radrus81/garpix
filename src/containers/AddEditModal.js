import { connect } from 'react-redux'
import AddEditModal from '../components/Modals/AddEditModal'
import { openModal, closeAddEditModal } from '../store/actions/actionModal'

const mapStateToProps = (state) => ({
  isOpenAddEditModal: state.addEditModal.isOpenAddEditModal,
})

const mapDispatchToProps = (dispatch) => ({
  openModal: (typeInfo) => dispatch(openModal(typeInfo)),
  closeAddEditModal: () => dispatch(closeAddEditModal()),
})

export default connect(mapStateToProps, mapDispatchToProps)(AddEditModal)
