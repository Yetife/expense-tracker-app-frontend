import React from 'react';
import {
    Avatar, Button, Checkbox,
    FormControl,
    FormControlLabel,
    FormLabel,
    Grid,
    Paper, Radio,
    RadioGroup,
    TextField,
    Typography
} from "@mui/material";
import CreditCardOffIcon from '@mui/icons-material/CreditCardOff';
import useStyles from './styles'
import {Link} from "react-router-dom";


const Register = () => {
    const classes = useStyles();
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const marginTop = { marginTop: 5 }
    return (
        <Grid>
            <Paper elevation={20} className={classes.paper}>
                <Grid align='center'>
                    <Avatar className={classes.avatar}>
                        <CreditCardOffIcon />
                    </Avatar>
                    <h2 style={headerStyle}>Sign Up</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
                </Grid>
                <form>
                    <TextField fullWidth label='Name' placeholder="Enter your name" variant={"standard"}/>
                    <TextField fullWidth label='Email' placeholder="Enter your email" variant={"standard"}/>
                    <FormControl component="fieldset" style={marginTop}>
                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup aria-label="gender" name="gender" style={{ display: 'initial' }}>
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                        </RadioGroup>
                    </FormControl>
                    <TextField fullWidth label='Phone Number' placeholder="Enter your phone number" variant={"standard"}/>
                    <TextField fullWidth label='Password' placeholder="Enter your password" variant={"standard"}/>
                    <TextField fullWidth label='Confirm Password' placeholder="Confirm your password" variant={"standard"}/>
                    <FormControlLabel
                        control={<Checkbox name="checkedA" />}
                        label="I accept the terms and conditions."
                    />
                    <Link to={'/login'} style={{textDecoration:'none'}}>
                        <Button type='submit' variant='contained' color='primary'>Sign up</Button>
                    </Link>

                </form>
            </Paper>
        </Grid>
    );
};

export default Register;