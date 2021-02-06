import React, { useState } from 'react'
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
import TableHeader from '../ui/TableHeader'
import useStyles from './BooksStyles'
import columns from './Columns'
import ActiveButtons from '../ui/ActiveButtons'
import AddButton from '../ui/AddButton'
import ContirmDialog from '../Modals/ConfirmDialog'
import DetailBookModal from '../Modals/DetailBookModal'

const Books = ({ books, authors, openModal, editBook, deleteBook }) => {
  let newBooks = []
  if (books.length && authors.length) {
    //этот блок при нормальном  бэке не нужен был бы
    newBooks = books.map((book) => {
      let author = authors.find((author) => author.id === book.author_id)
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
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)

  const [isOpen, setConfirmModal] = useState(false)
  const [message, setMessage] = useState('')
  const [idMemory, setIdMemory] = useState(null)

  const [isOpenDetailBookModal, setIsOpenDetailBookModal] = useState(false)
  const [detailBook, setDetailBook] = useState({})

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  const showConfirmModal = (id) => {
    setIdMemory(id)
    const { title } = books.find((book) => book.id === id)
    setMessage(`Вы действительно хотите удалить книгу "${title}"?`)
    setConfirmModal(true)
  }

  const handleOkDelete = async () => {
    await deleteBook(idMemory)
    setConfirmModal(false)
  }
  const showDetailBookModal = (id) => {
    const detailBook = newBooks.find((book) => book.active === id)
    setDetailBook(detailBook)
    setIsOpenDetailBookModal(true)
  }

  return (
    <>
      <Paper className={classes.root}>
        <AddButton
          titleBtn="Добавить книгу"
          style={classes.button}
          typeInfo="addBook"
          openModal={openModal}
        />
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHeader columns={columns} />
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
                              <ActiveButtons
                                id={value}
                                editRecord={editBook}
                                showConfirmModal={showConfirmModal}
                                showDetailModal={showDetailBookModal}
                              />
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
      <ContirmDialog
        isOpen={isOpen}
        isRemove={true}
        message={message}
        handleOk={() => handleOkDelete()}
        handleCancel={() => {
          setConfirmModal(false)
        }}
      />
      <DetailBookModal
        isOpen={isOpenDetailBookModal}
        handleCloseInfoModal={() => {
          setIsOpenDetailBookModal(false)
        }}
        detailBook={detailBook}
      />
    </>
  )
}

export default Books
