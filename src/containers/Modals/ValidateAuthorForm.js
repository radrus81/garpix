const validate = (values) => {
  const errors = {}
  if (!values.family) {
    errors.family = 'Поле не заполнено'
  } else if (/^[0-9]/.test(values.family)) {
    errors.family = 'Поле может содержать только буквы'
  } else if (values.family.length < 3) {
    errors.family = 'Минимальное количество символов не может быть меньше 3'
  }
  if (!values.name) {
    errors.name = 'Поле не заполнено'
  } else if (/^[0-9]/.test(values.name)) {
    errors.name = 'Поле может содержать только буквы'
  } else if (values.name.length < 3) {
    errors.name = 'Минимальное количество символов не может быть меньше 3'
  }
  return errors
}

export default validate
