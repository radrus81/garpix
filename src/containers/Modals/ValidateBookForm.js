const validate = (values) => {
  const currentYear = new Date().getFullYear()
  const errors = {}
  if (!values.title) {
    errors.title = 'Поле не заполнено'
  } else if (/^[0-9]/.test(values.title)) {
    errors.title = 'Поле может содержать только буквы'
  } else if (values.title.length < 3) {
    errors.title = 'Минимальное количество символов не может быть меньше 3'
  }
  if (!values.author_id) {
    errors.author_id = 'Не выбран автор'
  }
  if (!values.year) {
    errors.year = 'Поле не заполнено'
  } else if (isNaN(Number(values.year))) {
    errors.year = 'Поле может содержать только цифры'
  } else if (Number(values.year) > currentYear) {
    errors.year = `Год издания не может быть больше ${currentYear}`
  } else if (Number(values.year) < 1000) {
    errors.year = `Год издания не может быть меньше 1000`
  }
  return errors
}

export default validate
