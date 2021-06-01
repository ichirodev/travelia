import {Button, Typography, AppBar, Toolbar} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

/* Style */
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
    marginRight: "12px"
  }
});

const cardStyle = makeStyles({
  root: {
    minWidth: 275,
    
  }, 
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 10,
  }
});

/* App */
function App() {
  const classes = gridStyle(); // Use the styles from Material-UI, 'classes' name is confusing, like for what reason you decide to call it classes?
  const avatarClasses = avatarStyle();
  const avatarIconClasses = avatarIconStyle();
  const cardClasses = cardStyle();
  const bull = <span className={cardClasses.bullet}>•</span>;

  return (
    <>
    {/* AppBar */}
    <AppBar position="static">
      <Toolbar>
        <Grid container spacing={3}>
          <Grid item xs={10}>
            {/* LOGO */}
          </Grid>
          
          <Grid item xs={2}>
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
    <main>
    <div>
      {/* Grids for content */}
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={8}>
              {/* Best places to travel (Recommended) */}
              <Card className={cardStyle.root} id="recommendedPlace1">
                <CardContent>
                  <Typography variant="h5" component="h2">
                    {"🇲🇽"}                    
                    {" Puerto Vallarta, Jalisco, México"}
                  </Typography>
                  <Typography className={cardStyle.pos} color="textSecondary">
                    {"Desde $6,999"} 
                  </Typography>
                  <Typography variant="body2" component="p">
                    Viaja a una de las playas más famosas de todo México y conoce sus atractivos turisticos, la comida local y envuelvete en la fiesta del lugar.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Reservar</Button>
                </CardActions>
              </Card>

              
              <Card className={cardStyle.root} id="recommendedPlace2">
                <CardContent>
                  <Typography variant="h5" component="h2">
                    {"🇺🇸"}
                    {" Malibu, California, Estados Unidos de America"}
                  </Typography>
                  <Typography className={cardStyle.pos} color="textSecondary">
                    {"Desde $10,699"}
                  </Typography>
                  <Typography variant="body2" component="p">
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Reservar</Button>
                </CardActions>
              </Card>

              
              <Card className={cardStyle.root} id="recommendedPlace1">
                <CardContent>
                  <Typography variant="h5" component="h2">
                    {"🇮🇹"}
                    {" Nápoles, Campania, Italia"}
                  </Typography>
                  <Typography className={cardStyle.pos} color="textSecondary">
                    {"Desde $35,999"} 
                  </Typography>
                  <Typography variant="body2" component="p">
                    Descripcion mamalona
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Reservar</Button>
                </CardActions>
              </Card>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>
              {/* Information about the site */}
              <Typography variant="h5">
                {"Travelia is a website managed by the company \"InV\", the objective of Travelia is to give people unique memories and experiences in their travels in an easy, fast and accessible way. "}
              </Typography>
              <Typography variant="subtitle1">
                {"Utilizar Travelia es muy sencillo, solo tienes que..."}
              </Typography>
              <Typography variant="subtitle1">
                {bull}{"Buscar el lugar que quieres visitar"}
              </Typography>
              <Typography variant="subtitle1">
                {bull}{"Seleccionar las fechas en las que quieres viajar"}
              </Typography>
              <Typography variant="subtitle1">
                {bull}{"Personalizar tu experiencia"}
              </Typography>
              <Typography variant="subtitle1">
                {"Y en estos tres sencillos pasos ya tienes tu viaje planeado, nosotros nos encargamos de lo demás."}
              </Typography>
              
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
    </main>
    <footer>
      <div>
        <Typography variant="caption">
        {"Travelia 2021 was made for educational purposes and doesn't pretend or aim to have any monetary benefit. This is a demo site made for a project of Software Engineering Course, we don't sell shit or at least not that I know."}
        </Typography>
        
        <Typography variant="caption">{"Check the source code on "}</Typography>
        <Typography variant="caption">{"GitHub"}</Typography>
        
      </div>
    </footer>

    </>
    );
}

export default App;
