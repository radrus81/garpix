const validate = (values) => {
  const errors = {}
  if (!values.family) {
    errors.family = 'Поле не заполнено'
  } else if (/^[0-9]/.test(values.family)) {
    errors.family = 'Поле может содержать только буквы'
  }
  if (!values.name) {
    errors.name = 'Поле не заполнено'
  } else if (/^[0-9]/.test(values.name)) {
    errors.name = 'Поле может содержать только буквы'
  }
  return errors
}

export default validate
