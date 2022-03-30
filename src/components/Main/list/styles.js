import {makeStyles} from '@mui/styles'
import {red} from '@mui/material/colors'


export default makeStyles((theme) => ({
    avatarIncome: {
        color: '#fff',
        backgroundColor: 'green !important'
    },
    avatarExpense: {
        color: theme.palette.getContrastText(red[500]),
        backgroundColor: 'red !important',
    },
    list: {
        maxHeight: '150px',
        overflow: 'auto',
    }
}));