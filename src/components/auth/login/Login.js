import React from 'react';
import {Avatar, Checkbox, FormControlLabel, Grid, Paper, TextField, Button, Typography, Box} from '@mui/material'
import CreditCardOffIcon from '@mui/icons-material/CreditCardOff';
import {Link} from 'react-router-dom'
import useStyles from './styles'

const Login = () => {
    const classes =useStyles();
    return (
        <Grid>
            <Paper elevation={10} className={classes.paper}>
                <Grid item align={'center'}>
                    <Avatar className={classes.avatar}><CreditCardOffIcon/></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <Box>
                    <TextField label='Username' placeholder='Enter username' variant={"standard"} fullWidth required/>
                    <TextField label='Password' placeholder='Enter password' variant={"standard"} type='password' fullWidth required/>
                </Box>
                <FormControlLabel
                    control={
                        <Checkbox
                            name="checkedB"
                            color="primary"
                        />
                    }
                    label="Remember me"
                />
                <Link to="/dashboard" style={{textDecoration: 'none'}}>
                    <Button type='submit' color='primary' variant="contained" className={classes.button} fullWidth>Sign in</Button>
                </Link>
                <Typography >
                    <a href="#" >
                        Forgot password ?
                    </a>
                </Typography>
                <Typography > Do you have an account ?
                    <Link to={"/register"} >
                        Sign Up
                    </Link>
                </Typography>
            </Paper>
        </Grid>
    );
};

export default Login;