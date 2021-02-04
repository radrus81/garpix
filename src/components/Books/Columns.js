const columns = [
  { id: 'active', label: '', minWidth: '8%' },
  { id: 'title', label: 'Название книги', align: 'center', minWidth: '15%' },
  {
    id: 'family_author',
    label: 'Фамилия автора',
    minWidth: '10%',
    align: 'center',
  },
  {
    id: 'name_author',
    label: 'Имя автора',
    minWidth: '10%',
    align: 'center',
  },
  {
    id: 'created_at',
    label: 'Дата добавления книги',
    minWidth: '8%',
    align: 'center',
  },
  {
    id: 'year',
    label: 'Первая публикация',
    minWidth: '6%',
    align: 'center',
  },
  {
    id: 'image',
    label: 'Обложка книги',
    minWidth: '10%',
    align: 'center',
  },
]

export default columns
