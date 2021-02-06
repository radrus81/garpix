import React, { useState } from 'react'
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow,
} from '@material-ui/core/'
import TableHeader from '../ui/TableHeader'
import useStyles from '../Books/BooksStyles'
import columns from './Columns'
import ActiveButtons from '../ui/ActiveButtons'
import AddButton from '../ui/AddButton'
import ContirmDialog from '../Modals/ConfirmDialog'
import DetailAuthorModal from '../Modals/DetailAuthorModal'

const Authors = ({ books, authors, openModal, editAuthor, deleteAuthor }) => {
  const classes = useStyles()
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)

  const [isOpen, setConfirmModal] = useState(false)
  const [message, setMessage] = useState('')
  const [idMemory, setIdMemory] = useState(null)

  const [isOpenDetailAuthorModal, setIsOpenDetailAuthorModal] = useState(false)
  const [isRemove, setIsRemove] = useState(false)
  const [detailAuthor, setDetailAuthor] = useState({})

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  const showConfirmModal = (idAuthor) => {
    let message = ''
    setIdMemory(idAuthor)
    const { family, name } = authors.find((author) => author.id === idAuthor)
    books.forEach((book) => {
      if (book.author_id === idAuthor) {
        message += `"${book.title}" `
      }
    })
    if (!message) {
      message = `Вы действительно хотите удалить автора "${family} ${name}"?`
      setIsRemove(true)
    } else {
      setIsRemove(false)
      message = `Невозможно удалить автора "${family} ${name}", т.к у данного автора имеются привязанные книги.Сначала удалите книги ${message}`
    }
    setMessage(message)
    setConfirmModal(true)
  }

  const handleOkDelete = async () => {
    await deleteAuthor(idMemory)
    setConfirmModal(false)
  }
  const showDetailAuthorModal = (id) => {
    const detailAuthor = authors.find((author) => author.id === id)
    setDetailAuthor(detailAuthor)
    setIsOpenDetailAuthorModal(true)
  }

  return (
    <>
      <Paper className={classes.root}>
        <AddButton
          titleBtn="Добавить автора"
          style={classes.button}
          typeInfo="addAuthor"
          openModal={openModal}
        />
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHeader columns={columns} />
            <TableBody>
              {authors
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
                                id={row.id}
                                editRecord={editAuthor}
                                showConfirmModal={showConfirmModal}
                                showDetailModal={showDetailAuthorModal}
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
          count={authors.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
      <ContirmDialog
        isOpen={isOpen}
        isRemove={isRemove}
        message={message}
        handleOk={() => handleOkDelete()}
        handleCancel={() => {
          setConfirmModal(false)
        }}
      />
      <DetailAuthorModal
        isOpen={isOpenDetailAuthorModal}
        handleCloseInfoModal={() => {
          setIsOpenDetailAuthorModal(false)
        }}
        detailAuthor={detailAuthor}
      />
    </>
  )
}

export default Authors
