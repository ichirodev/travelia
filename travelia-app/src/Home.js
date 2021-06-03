import  {Button, Typography, AppBar, Toolbar, ButtonGroup, Divider, CssBaseline } from "@material-ui/core";
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
      marginRight: "2px"
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
      marginBottom: 12,
    }
  });
  
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
  

const Home = () => {
    const classes = gridStyle(); // Use the styles from Material-UI, 'classes' name is confusing, like for what reason you decide to call it classes?
  const avatarClasses = avatarStyle();
  const avatarIconClasses = avatarIconStyle();
  const bgClasses = backgroundStyle();
  const cardClasses = cardStyle();
  const bull = <span className={cardClasses.bullet}>•</span>;

    return (

    <div>
      {/* Grids for content */}
      <div className={classes.root}>
        {/* Separations for the main page structure */}
        <Grid container spacing={4} justify="center">

          {/* Welcome banner */}
          <Grid item xs={12} sm={12}>
            <Typography variant="h1">Welcome</Typography>
          </Grid>

          {/* Best places to travel (Recommended) */}
          <Grid item xs={12} sm={8}>
            <Grid container spacing={2}>
            {/* Recommended 1 */}
            <Grid item xs={12} sm={12}>
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
                    Viaja a una de las playas más famosas de todo México y conoce sus atractivos turisticos, la gastronomia local y sus tradiciones. Existen muchas actividades en Puerto Vallarta, desde aventuras para explorar escarpados ríos o un viaje para dedicarlo a la relajación, Puerto Vallarta te espera con una amplia selección de actividades y experiencias para elegir.
                  </Typography>
                </CardContent>
                <Divider></Divider>
                <CardActions>
                  <Button size="small">Reservar</Button>
                </CardActions>
              </Card>
          </Grid>

          {/* Recommended 2 */}
          <Grid item xs={12} sm={12}>
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
                <Divider></Divider>
                <CardActions>
                  <Button size="small">Reservar</Button>
                </CardActions>
              </Card>
          </Grid>

          {/* Recommended 3 */}
          <Grid item xs={12} sm={12}>
          <Card className={cardStyle.root} id="recommendedPlace3">
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
                <Divider></Divider>
                <CardActions>
                  <Button size="small">Reservar</Button>
                </CardActions>
              </Card>
          </Grid>

            </Grid>
          </Grid>

          {/* Information about the site */}
          <Grid item xs={12} sm={4}>
            <Paper className={classes.paper}>
              
                <Typography variant="h5">
                  {"Travelia es un sitio web manejado por la compañia \"InV\", el objetivo de Travelia es darle a sus usuarios experiencias y recuerdos unicos en sus viajes de una forma rapida, sencilla y accesible."}
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
                <br></br>
                <Divider></Divider>
                <br></br>
                <Button variant="contained" color="primary">
                  {"¡Comienza a viajar!"}
                </Button>

              </Paper>
          </Grid>
          
        </Grid>
      </div>
    </div>
    
    );
}

export default Home;