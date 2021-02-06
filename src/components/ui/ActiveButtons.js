import React from 'react'
import { Create, Delete, FindInPage } from '@material-ui/icons'
import IconButton from '@material-ui/core/IconButton'

const ActiveButtons = ({
  id,
  editRecord,
  showConfirmModal,
  showDetailModal,
}) => {
  return (
    <>
      <IconButton
        title="Редактировать"
        aria-label="expand row"
        size="small"
        onClick={() => {
          editRecord(id)
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
        title="Просмотр"
        aria-label="expand row"
        size="small"
        onClick={() => {
          showDetailModal(id)
        }}
      >
        <FindInPage />
      </IconButton>
    </>
  )
}

export default ActiveButtons
