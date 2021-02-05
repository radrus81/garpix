const validate = (values) => {
  const currentYear = new Date().getFullYear()
  const errors = {}
  if (!values.title) {
    errors.title = 'Поле не заполнено'
  } else if (/^[0-9]/.test(values.title)) {
    errors.title = 'Поле может содержать только буквы'
  }
  if (!values.year) {
    errors.year = 'Поле не заполнено'
  } else if (isNaN(Number(values.year))) {
    errors.year = 'Поле может содержать только цифры'
  } else if (Number(values.year) > currentYear) {
    errors.year = `Год издания не может быть больше ${currentYear}`
  }
  return errors
}

export default validate
