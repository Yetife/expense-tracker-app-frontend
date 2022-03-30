import React, {useEffect, useRef} from 'react'
import Details from './components/details/Details.js'
import Main from './components/Main/Main.js'
import { Grid } from "@mui/material";
import useStyles from './components/dashboard/styles';
import {PushToTalkButton, PushToTalkButtonContainer, ErrorPanel} from '@speechly/react-ui';
import {useSpeechContext} from '@speechly/react-client'
import Login from "./components/auth/login/Login";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Register from "./components/auth/register/Register";
import Dashboard from "./components/dashboard/Dashboard";


function App() {
    const classes = useStyles()
    const { speechState } = useSpeechContext()

    // useEffect(() => {
    //     if(speechState === SpeechContextState.) {
    //         executeScroll();
    //     }
    // }, [speechState])

  return (
      <BrowserRouter>
        <div>
            <Grid container>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </Grid>
            <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </div>
      </BrowserRouter>

  );
}

export default App;
