import React from 'react'
import  {Card, CardHeader, CardContent, Typography, Grid, Divider} from '@mui/material'
import useStyles from './styles'
import Form from './form/Form'
import List from './list/List'
const Main = () => {
  const classes = useStyles();

    return (
    <Card className={classes.root}>
        <CardHeader title="Expense Tracker" subheader="Powered by Speechly" />
        <CardContent>
            <Typography align="center" variant="h5">Total Balance #1000</Typography>
            <Typography variant="subtitle1" style={{ lineHeight: '1.5em', marginTop: '20px'}}>
                {/* <InfoCard />     */}
                Try saying: Add Income for #100 in Category salary for Monday...
            </Typography> 
            <Divider />
            <Form />
        </CardContent>
        <CardContent className={classes.cardContent}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <List />
                </Grid>
            </Grid>
        </CardContent>
    </Card>
  )
}

export default Main