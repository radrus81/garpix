import React from 'react'
import { Create, Delete, FindInPage } from '@material-ui/icons'
import IconButton from '@material-ui/core/IconButton'

const ActiveButtons = ({
  id,
  editBook,
  showConfirmModal,
  showDetailBookModal,
}) => {
  return (
    <>
      <IconButton
        title="Редактировать"
        aria-label="expand row"
        size="small"
        onClick={() => {
          editBook(id)
        }}
      >
        <Create />
      </IconButton>
      <IconButton
        color="secondary"
        title="Удалить"
        aria-label="expand row"
        size="small"
        onClick={() => {
          showConfirmModal(id)
        }}
      >
        <Delete />
      </IconButton>
      <IconButton
        color="primary"
        title="Просмотр книги"
        aria-label="expand row"
        size="small"
        onClick={() => {
          showDetailBookModal(id)
        }}
      >
        <FindInPage />
      </IconButton>
    </>
  )
}

export default ActiveButtons
