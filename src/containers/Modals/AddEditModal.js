import { connect } from 'react-redux'
import AddEditModal from '../../components/Modals/AddEditModal'
import { closeAddEditModal } from '../../store/actions/actionModal'
import { addNewBook } from '../../store/actions/actionBooks'
import { addNewAuthor } from '../../store/actions/actionAuthor'

const mapStateToProps = (state) => ({
  isOpenAddEditModal: state.addEditModal.isOpenAddEditModal,
  typeInfo: state.addEditModal.typeInfo,
})

const mapDispatchToProps = (dispatch) => ({
  closeAddEditModal: () => dispatch(closeAddEditModal()),
  addNewBook: (typeInfo, dataForm) => dispatch(addNewBook(typeInfo, dataForm)),
  addNewAuthor: (typeInfo, dataForm) =>
    dispatch(addNewAuthor(typeInfo, dataForm)),
})

export default connect(mapStateToProps, mapDispatchToProps)(AddEditModal)
