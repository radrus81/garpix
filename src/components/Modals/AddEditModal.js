import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Modal, Backdrop, Fade, Box } from '@material-ui/core'
import BookFormWithRedux from '../../containers/Modals/BookForm'
import AuthorFormWithRedux from '../../containers/Modals/AuthorForm'

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

const AddEditModal = ({
  isOpenAddEditModal,
  typeInfo,
  closeAddEditModal,
  addNewBook,
  addNewAuthor,
}) => {
  const classes = useStyles()

  const onSubmit = (dataForm) => {
    if (typeInfo === 'addBook' || typeInfo === 'editBook') {
      addNewBook(typeInfo, dataForm)
    } else {
      addNewAuthor(typeInfo, dataForm)
    }
  }
  return (
    <Box>
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
        {isOpenAddEditModal ? (
          <Fade>
            {typeInfo === 'addBook' || typeInfo === 'editBook' ? (
              <BookFormWithRedux
                typeInfo={typeInfo}
                closeAddEditModal={closeAddEditModal}
                onSubmit={onSubmit}
              />
            ) : (
              <AuthorFormWithRedux
                typeInfo={typeInfo}
                closeAddEditModal={closeAddEditModal}
                onSubmit={onSubmit}
              />
            )}
          </Fade>
        ) : (
          <Fade></Fade>
        )}
      </Modal>
    </Box>
  )
}

export default AddEditModal
