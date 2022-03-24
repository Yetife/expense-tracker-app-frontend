import {makeStyles} from '@mui/styles'
import {red, green} from '@mui/material/colors'


export default makeStyles((theme) => ({
    avatarIncome: {
        color: '#fff',
        backgroundColor: 'green !important'
    },
    avatarExpense: {
        color: theme.palette.getContrastText(red[500]),
        backgroundColor: red[500],
    },
    list: {
        maxHeight: '150px',
        overflow: 'auto',
    }
}));