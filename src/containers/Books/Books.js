import { connect } from 'react-redux'
import Books from '../../components/Books/Books'
import { openModal, closeAddEditModal } from '../../store/actions/actionModal'
import { editBook, deleteBook } from '../../store/actions/actionBooks'

const mapStateToProps = (state) => ({
  isOpenAddEditModal: state.addEditModal.isOpenAddEditModal,
  books: state.books.books,
  authors: state.authors.authors,
})

const mapDispatchToProps = (dispatch) => ({
  openModal: (typeInfo) => dispatch(openModal(typeInfo)),
  closeAddEditModal: () => dispatch(closeAddEditModal()),
  editBook: (id) => dispatch(editBook(id)),
  deleteBook: (id) => dispatch(deleteBook(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Books)
