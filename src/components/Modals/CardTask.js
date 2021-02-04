import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import TextareaAutosize from '@material-ui/core/TextareaAutosize'
import Typography from '@material-ui/core/Typography'
import FieldDateTimeForAddTask from '../../containers/Meetroom/FieldDateTimeForAddTask'


const useStyles = makeStyles({
  root: {
    width: '100%',
    height: 420,
  },
  taskText: {
    fontSize: '16px',
    width: '100%',    
  },
})

const CardTask = ({
  typeCart,
  nameDayWeek,
  dateDayWeek,
  taskTime,
  taskText,
  setTextTaskToStore,
  saveTask,
}) => {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          {
            typeCart === 'edit' ? (
              <Typography gutterBottom variant="h5" component="h2">
                  {nameDayWeek} {dateDayWeek} (during {taskTime} + 30 minutes)
              </Typography>) :
            <FieldDateTimeForAddTask/>
          }
          
          <TextareaAutosize
            aria-label="minimum height"
            rowsMin={10}
            className={classes.taskText}
            placeholder="Your task"
            defaultValue={taskText}
            onChange={(event) => {
              setTextTaskToStore(event.target.value)
            }}
          />
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant="contained" color="primary" onClick={saveTask}>
          Save task
        </Button>
      </CardActions>
    </Card>
  )
}

export default CardTask
