import React, {useState} from 'react';
import { Input, Grid } from "@mui/material";
import useStyles from './styles'


const RegisterFom = (props) => {
    const classes = useStyles();
    const [focused, setFocused] = useState(false)
    const {errorMessage, onChange, input, type, endAdornment} = props;

    const handleFocus =(e) => {
        setFocused(true)
    };

    return (
        <Grid>
            <Input className={classes.input} onchange={onChange} fullWidth label={input.label} placeholder={input.placeholder} type={type} variant={"standard"} endAdornment={endAdornment}/>
            <span style={{display: 'none', fontSize: '12px', padding: '3px', color:  'red' }}>{errorMessage}</span>
        </Grid>
    );
};

export default RegisterFom;