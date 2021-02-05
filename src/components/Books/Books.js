import React from 'react'
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
import AddButton from '../ui/AddButton'

const Books = ({ books, authors, openModal, editBook }) => {
  let newBooks = []
  if (books.length && authors.length) {
    //этот блок при нормальном  бэке не нужно было бы
    newBooks = books.map((book) => {
      let author = authors.find((author) => author.id == book.author_id)
      return {
        active: book.id,
        created_at: book.created_at,
        family_author: author.family,
        name_author: author.name,
        title: book.title,
        year: book.year,
        image: book.image
          ? book.image
          : 'https://yt3.ggpht.com/a/AATXAJxsZsH6uN81a6jbEevYqx5XJS-ePXZg0KLSQQCT=s900-c-k-c0xffffffff-no-rj-mo',
      }
    })
  }

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
            {newBooks
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
                            <ActiveButtons id={value} editBook={editBook} />
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
        count={newBooks.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  )
}

export default Books
