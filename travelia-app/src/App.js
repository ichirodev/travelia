import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import  {Button, Typography, AppBar, Toolbar, ButtonGroup, Divider, CssBaseline } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import Catalog from './Catalog';
import Home from './Home';

const backgroundStyle = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${process.env.PUBLIC_URL + "/static/media/bg.jpg"})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  }, 
  content: {
    paddingTop: '2px',
    paddingRight: '12px',
    paddingLeft: '12px',
    paddingBottom: '18px',
  },
}));

const gridStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    font: 'Roboto Light',
  },
}));

const avatarStyle = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const avatarIconStyle = makeStyles({
  root: {
    marginLeft: "12px",
    marginRight: "2px"
  }
});


/* App */
function App() {
  
  const classes = gridStyle(); // Use the styles from Material-UI, 'classes' name is confusing, like for what reason you decide to call it classes?
  const avatarClasses = avatarStyle();
  const avatarIconClasses = avatarIconStyle();
  const bgClasses = backgroundStyle();
  
  return (
    
    <Router>
    <div className={bgClasses.root}>
      <CssBaseline/>

{/* AppBar */}
<div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Grid container spacing={3} direction="row" justify="space-between" alignItems="center">
              <Grid item >
                {/* LOGO */}
                LOGO
                {/* Travels List */}
                <Button color="inherit">
                  <FlightTakeoffIcon fontSize="small"/>
                  <Divider orientation="vertical" flexItem variant="fullWidth" light="true"/>
                  <div>{"Lugares"}</div>
                  </Button>
              </Grid>
              
              <Grid item>
                <div className={avatarClasses.root}>
                  <Button color="inherit">
                    {"Login/Register"}
                    <div className={avatarIconClasses.root}>
                      <Avatar alt="Avatar" src="/static/media/avatar-default.png"/>
                    </div>
                  </Button>
                  </div>
              </Grid>
              
            </Grid>      
          </Toolbar>
        </AppBar>
        </div>
        <br></br>   

      <div className={bgClasses.content}>
    
    <Switch>
      <Route path="/">
        <Home/>   
    </Route>
    <Route path="/Catalog">
      <Catalog />
    </Route>
    </Switch> 
    {/* Footer, disclaimer and something else */}
    <footer>
      <br></br>
      <Divider/>
      <br></br>
      <Grid container spacing={2} justify="center">
        <Grid xs={10}>
          <div>
            <Typography variant="caption">
            {"Travelia 2021 was made for educational purposes and doesn't pretend or aim to have any monetary benefit. This is a demo site made for a project of Software Engineering Course, we don't sell shit or at least not that I know."}
            </Typography>
            
            <Typography variant="caption">{" Check the source code on "}</Typography>
            <Typography variant="caption">{"GitHub"}</Typography>
          </div>
        </Grid> 
        <br></br> 
      </Grid>
    </footer>



      </div>

    </div>
    
    </Router>
    );
}

export default App;
