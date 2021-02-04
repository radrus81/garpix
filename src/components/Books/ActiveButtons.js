import React from 'react'
import { Create, Delete } from '@material-ui/icons'
import IconButton from '@material-ui/core/IconButton'

const ActiveButtons = ({ number }) => {
  return (
    <>
      <IconButton
        title="Редактировать"
        aria-label="expand row"
        size="small"
        onClick={() => {}}
      >
        <Create />
      </IconButton>
      <IconButton
        title="Удалить"
        aria-label="expand row"
        size="small"
        onClick={() => {}}
      >
        <Delete />
      </IconButton>
    </>
  )
}

export default ActiveButtons
