import React from 'react'
import { Button } from '@material-ui/core/'
import { PostAdd } from '@material-ui/icons/'

const AddButton = ({ titleBtn, style, typeInfo, openModal }) => {
  return (
    <Button
      variant="contained"
      className={style}
      color="primary"
      startIcon={<PostAdd />}
      onClick={() => {
        openModal(typeInfo)
      }}
    >
      {titleBtn}
    </Button>
  )
}

export default AddButton
