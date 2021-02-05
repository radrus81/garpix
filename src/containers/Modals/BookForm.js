// import { connect } from 'react-redux'
import BookForm from '../../components/Modals/BookForm'
import { reduxForm } from 'redux-form'
import validate from './ValidateBookForm'

const BookFormWithRedux = reduxForm({
  form: 'BookForm',
  validate,
})(BookForm)

export default BookFormWithRedux
