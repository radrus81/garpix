import { connect } from 'react-redux'
import AddEditModal from '../../components/Modals/AddEditModal'
import { closeAddEditModal } from '../../store/actions/actionModal'
import { addNewBook } from '../../store/actions/actionBooks'

const mapStateToProps = (state) => ({
  isOpenAddEditModal: state.addEditModal.isOpenAddEditModal,
  typeInfo: state.addEditModal.typeInfo,
})

const mapDispatchToProps = (dispatch) => ({
  closeAddEditModal: () => dispatch(closeAddEditModal()),
  addNewBook: (typeInfo, dataForm) => dispatch(addNewBook(typeInfo, dataForm)),
})

export default connect(mapStateToProps, mapDispatchToProps)(AddEditModal)
