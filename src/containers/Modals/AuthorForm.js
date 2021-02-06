import { connect } from 'react-redux'
import AuthorForm from '../../components/Modals/AuthorForm'
import { reduxForm } from 'redux-form'
import validate from './ValidateAuthorForm'

const connectAuthorFormWithRedux = reduxForm({
  form: 'AuthorForm',
  validate,
  enableReinitialize: true,
})(AuthorForm)

const AuthorFormWithRedux = connect((state) => ({
  authors: state.authors.authors,
  initialValues: state.authors.initialValues,
}))(connectAuthorFormWithRedux)

export default AuthorFormWithRedux
