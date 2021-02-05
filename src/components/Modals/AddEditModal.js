import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Modal, Backdrop, Fade } from '@material-ui/core'
import BookFormWithRedux from '../../containers/Modals/BookForm'

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}))

const AddEditModal = ({ isOpenAddEditModal, typeInfo, closeAddEditModal }) => {
  const classes = useStyles()

  const onSubmit = (dataForm) => {
    console.log(dataForm)
  }
  return (
    <div>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className={classes.modal}
        open={isOpenAddEditModal}
        onClose={closeAddEditModal}
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={isOpenAddEditModal}>
          {typeInfo === 'addBook' ? (
            <BookFormWithRedux
              typeInfo={typeInfo}
              closeAddEditModal={closeAddEditModal}
              onSubmit={onSubmit}
            />
          ) : (
            <h1>Нет формы пока</h1>
          )}
        </Fade>
      </Modal>
    </div>
  )
}

export default AddEditModal
