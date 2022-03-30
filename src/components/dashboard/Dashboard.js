import React, {useRef} from 'react';
import {Grid} from "@mui/material";
import Details from "../details/Details";
import Main from "../Main/Main";
import {ErrorPanel, PushToTalkButton, PushToTalkButtonContainer} from "@speechly/react-ui";
import useStyles from './styles'

const Dashboard = () => {
    const classes = useStyles();
    const main = useRef(null)
    const executeScroll = () => main.current.scrollIntoView();
    return (
        <div>
            <Grid className={classes.grid} container spacing={0} alignItems="center" justifyContent="center" style={{ height: '100vh'}}>
                <Grid item xs={12} sm={4} className={classes.mobile}>
                    <Details title="Income"/>
                </Grid>
                <Grid ref={main} item xs={12} sm={3} className={classes.main}>
                    <Main />
                </Grid>
                <Grid item xs={12} sm={4} className={classes.desktop}>
                    <Details title="Income"/>
                </Grid>
                <Grid item xs={12} sm={4} className={classes.last}>
                    <Details title="Expense"/>
                </Grid>
            </Grid>
            {/*<PushToTalkButtonContainer>*/}
            {/*    <PushToTalkButton />*/}
            {/*    <ErrorPanel />*/}
            {/*</PushToTalkButtonContainer>*/}
        </div>
    );
};

export default Dashboard;