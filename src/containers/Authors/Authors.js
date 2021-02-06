import { connect } from 'react-redux'
import Authors from '../../components/Authors/Authors'
import { openModal, closeAddEditModal } from '../../store/actions/actionModal'
import { editAuthor, deleteAuthor } from '../../store/actions/actionAuthor'

const mapStateToProps = (state) => ({
  isOpenAddEditModal: state.addEditModal.isOpenAddEditModal,
  authors: state.authors.authors,
  books: state.books.books,
})

const mapDispatchToProps = (dispatch) => ({
  openModal: (typeInfo) => dispatch(openModal(typeInfo)),
  closeAddEditModal: () => dispatch(closeAddEditModal()),
  editAuthor: (id) => dispatch(editAuthor(id)),
  deleteAuthor: (id) => dispatch(deleteAuthor(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Authors)
