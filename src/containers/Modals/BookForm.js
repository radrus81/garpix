import { connect } from 'react-redux'
import BookForm from '../../components/Modals/BookForm'
import { reduxForm } from 'redux-form'
import validate from './ValidateBookForm'

const connectBookFormWithRedux = reduxForm({
  form: 'BookForm',
  validate,
  enableReinitialize: true,
})(BookForm)

const BookFormWithRedux = connect((state) => ({
  authors: state.authors.authors,
  initialValues: state.books.initialValues,
}))(connectBookFormWithRedux)

export default BookFormWithRedux
