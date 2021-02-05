import { connect } from 'react-redux'
import Books from '../../components/Books/Books'
import { openModal, closeAddEditModal } from '../../store/actions/actionModal'

const mapStateToProps = (state) => ({
  isOpenAddEditModal: state.addEditModal.isOpenAddEditModal,
})

const mapDispatchToProps = (dispatch) => ({
  openModal: (typeInfo) => dispatch(openModal(typeInfo)),
  closeAddEditModal: () => dispatch(closeAddEditModal()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Books)
