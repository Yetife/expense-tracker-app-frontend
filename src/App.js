// import './App.css';
import Details from './components/details/Details.js'
import Main from './components/Main/Main.js'
import { Grid } from "@mui/material";
import useStyles from './styles';


function App() {
    const classes = useStyles()

  return (
        <div>
            <Grid className={classes.grid} container spacing={0} alignItems="center" justifyContent="center" style={{ height: '100vh'}}>
                <Grid item xs={12} sm={4}>
                    <Details title="Income"/>
                </Grid>
                <Grid item xs={12} sm={3}>
                   <Main />
                </Grid>  
                <Grid item xs={12} sm={4}>
                    <Details title="Expense"/>
                </Grid>
            </Grid>
        </div>

  );
}

export default App;
