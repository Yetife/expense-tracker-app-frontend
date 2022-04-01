import React, {useState} from 'react';
import {
    Avatar, Button, Checkbox,
    FormControl,
    FormControlLabel,
    FormLabel,
    Grid, IconButton, InputAdornment,
    Paper, Radio,
    RadioGroup,
    TextField,
    Typography
} from "@mui/material";
import CreditCardOffIcon from '@mui/icons-material/CreditCardOff';
import useStyles from './styles'
import {Link} from "react-router-dom";
import RegisterFom from "./RegisterFom";
import {Visibility, VisibilityOff} from "@mui/icons-material";


const Register = () => {
    const [values, setValues] = useState({
        username: "",
        email: "",
        phoneNumber: "",
        password: "",
        confirmPassword: "",
    });

    const inputs = [
        {
            id: 1,
            name: "Username",
            type: "text",
            placeholder: "Username",
            errorMessage: "Username should be 3-16 characters and shouldn't include any special character!",
            label: "Username",
            pattern: "^[A-Za-z0-9]{3,16}$",
            required: true
        },{
            id: 2,
            name: "email",
            type: "email",
            placeholder: "Email",
            errorMessage: "It should be a valid email address",
            label: "Email",
            required: true
        },{
            id: 3,
            name: "phoneNumber",
            type: "phoneNumber",
            placeholder: "Phone Number",
            errorMessage: "",
            label: "Phone Number",
            required: true
        },
        {
            id: 4,
            name: "password",
            type: "password",
            placeholder: "Password",
            errorMessage: "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character",
            label: "Password",
            pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
            required: true
        },{
            id: 5,
            name: "confirmPassword",
            type: "password",
            placeholder: "Confirm Password",
            errorMessage: "Password don't match",
            label: "Confirm Password",
            pattern: values.password,
            required: true
        },
    ]
    

    const handleChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    }
    console.log(values)

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    // const handleRegister = () => {
    //     console.log(values)
    // }



    const classes = useStyles();

    return (
        <div>
            <Paper Paper elevation={20} className={classes.paper}>
                <Grid align='center'>
                    <Avatar className={classes.avatar}>
                        <CreditCardOffIcon />
                    </Avatar>
                    <h2 className={classes.header}>Sign Up</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
                </Grid>
                {inputs.map((input) =>(
                    <RegisterFom key={input.id} {...input}
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
                <FormControl component="fieldset" className={classes.form}>
                    <FormLabel component="legend">Gender</FormLabel>
                    <RadioGroup aria-label="gender" name="gender" style={{ display: 'initial' }}>
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                    </RadioGroup>
                </FormControl>
                <FormControlLabel
                    control={<Checkbox name="checkedA" />}
                    label="I accept the terms and conditions."
                />
                <Link to={'/login'} style={{textDecoration:'none'}}>
                    <Button type='submit' variant='contained' color='primary'>Sign up</Button>
                </Link>
            </Paper>
        </div>
    );
};

export default Register;