import React, { useEffect } from 'react'
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow,
  CardMedia,
} from '@material-ui/core/'
import TableHeader from './TableHeader'
import useStyles from './BooksStyles'
import columns from './Columns'
import ActiveButtons from './ActiveButtons'
import { getListBooks } from '../../store/actions/actionBooks'
import AddButton from '../ui/AddButton'

const rows = [
  {
    active: 1,
    title: 'Чистый код Чистый код Чистый код',
    family_author: 'Мухамедов',
    name_author: 'Руслан',
    created_at: '04.02.2021',
    year: '2015',
    image:
      'https://cdn.pixabay.com/photo/2017/01/27/12/53/books-2012936_1280.jpg',
  },
]

const Books = ({ openModal }) => {
  useEffect(() => {
    getListBooks()
  }, [])

  const classes = useStyles()
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  return (
    <Paper className={classes.root}>
      <AddButton
        titleBtn="Добавить книгу"
        style={classes.button}
        typeInfo="addBook"
        openModal={openModal}
      />
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHeader />
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row.active}
                  >
                    {columns.map((column) => {
                      const value = row[column.id]
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.id === 'active' ? (
                            <ActiveButtons number={value} />
                          ) : column.id === 'image' ? (
                            <CardMedia
                              className={classes.media}
                              image={value}
                              title="Contemplative Reptile"
                            />
                          ) : (
                            value
                          )}
                        </TableCell>
                      )
                    })}
                  </TableRow>
                )
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  )
}

export default Books
