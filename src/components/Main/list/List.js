import React from 'react'
import useStyles from './styles'
import { List as MUIList, ListItem, ListItemAvatar, ListItemText, Avatar, ListItemSecondaryAction, IconButton, Slide} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import MoneyOffIcon from '@mui/icons-material/MoneyOff'

const List = () => {
  const classes = useStyles();
  const transactions = [
    {id: 1, type: "Income", category: "Salary", amount: 50, date: new Date()},
    {id: 2, type: "Expense", category: "Food", amount: 50, date: new Date()},
    {id: 3, type: "Income", category: "Business", amount: 150, date: new Date()}
  ]

  return (
    <MUIList dense={false} className={classes.list}>
        {transactions.map((transaction) => (
          <Slide direction ="down" in mountOnEnter unmountOnExit key={transaction.id}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar className={transaction.type === 'Income' ? classes.avatarIncome : classes.avatarExpense}>
                    <MoneyOffIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={transaction.category} secondary={`#${transaction.amount} - ${transaction.date}`}/>
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="delete" onClick="">
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
          </Slide> 
        ))}
    </MUIList>
  )
}

export default List