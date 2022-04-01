import React, {useState} from 'react';
import {Avatar, Checkbox, FormControlLabel, Grid, Paper, Button, Typography, InputAdornment, IconButton} from '@mui/material'
import CreditCardOffIcon from '@mui/icons-material/CreditCardOff';
import {Link} from 'react-router-dom'
import useStyles from './styles'
import LoginForm from "./LoginForm";
import {Visibility, VisibilityOff} from "@mui/icons-material";

const Login = () => {
    const classes =useStyles();
    const [values, setValues] = useState({
        username: "",
        password: "",
        showPassword: false,
    });

    const inputs = [
        {
            id: 1,
            name: "username",
            type: "text",
            placeholder: "Username",
            errorMessage: "Username should be 3-16 characters and shouldn't include any special character!",
            label: "Username",
            pattern: "^[A-Za-z0-9]{3,16}$",
            required: true
        },{
            id: 4,
            name: "password",
            type: "password",
            placeholder: "Password",
            errorMessage: "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character",
            label: "Password",
            pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
            required: true
        }
    ]

    const handleSubmit = (e) => {
        e.preventDefault();
        if(values.email !== "" && values.password !== "") {
            let email = values.email
            localStorage.setItem("email", email)
        }else {
            alert("User info is incomplete")
        }
    }

    const handleChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    }
    console.log(values)
    //
    // const handleClickShowPassword = () => {
    //     setValues({
    //         ...values[inputs.name === "password"],
    //         showPassword: !values.showPassword,
    //     });
    // };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };


    return (
        <Grid>
            <Paper elevation={10} className={classes.paper}>
                <Grid item align={'center'}>
                    <Avatar className={classes.avatar}><CreditCardOffIcon/></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                {inputs.map((input) =>(
                    <LoginForm key={input.id}
                               type={input.type}
                                 value={values[input.name]}
                                 onChange={handleChange}
                                 input={input}
                               endAdornment={input.name === "password" && (
                                   <InputAdornment position="end">
                                       <IconButton
                                           aria-label="toggle password visibility"
                                           onClick={handleClickShowPassword}
                                           onMouseDown={handleMouseDownPassword}
                                       >
                                           {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                       </IconButton>
                                   </InputAdornment>)}
                    />

                ))}
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
                    <Button type='submit' color='primary' variant="contained" className={classes.button} fullWidth onClick={handleSubmit}>Sign in</Button>
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