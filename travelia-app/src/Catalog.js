import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";

// Style
import { divCenterStyle } from "./CssStyles";

const gridStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const cardStyle = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 145,
  },
});

/* Catalog */
const Catalog = () => {
  const gridStyleClass = gridStyle();
  const cardStyleClass = cardStyle();
  const divCenterStyleClass = divCenterStyle();

  return (
    <div className={divCenterStyleClass.div}>
      <div className={gridStyleClass.root}>
        <Grid container spacing={2}>
          <Grid item xs={6} sm={2}>
            <Card className={cardStyleClass.root}>
              <CardActionArea>
                <CardMedia
                  className={cardStyleClass.media}
                  image="https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&quality=90&v=1530129081"
                  title="Image"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {"Destino"}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Información sobre el destino
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Ver más
                </Button>
                <Button size="small" color="primary">
                  Reservar
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={6} sm={2}>
            <Card className={cardStyleClass.root}>
              <CardActionArea>
                <CardMedia
                  className={cardStyleClass.media}
                  image="https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&quality=90&v=1530129081"
                  title="Image"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {"Destino"}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Información sobre el destino
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Ver más
                </Button>
                <Button size="small" color="primary">
                  Reservar
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={6} sm={2}>
            <Card className={cardStyleClass.root}>
              <CardActionArea>
                <CardMedia
                  className={cardStyleClass.media}
                  image="https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&quality=90&v=1530129081"
                  title="Image"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {"Destino"}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Información sobre el destino
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Ver más
                </Button>
                <Button size="small" color="primary">
                  Reservar
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={6} sm={2}>
            <Card className={cardStyleClass.root}>
              <CardActionArea>
                <CardMedia
                  className={cardStyleClass.media}
                  image="https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&quality=90&v=1530129081"
                  title="Image"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {"Destino"}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Información sobre el destino
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Ver más
                </Button>
                <Button size="small" color="primary">
                  Reservar
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={6} sm={2}>
            <Card className={cardStyleClass.root}>
              <CardActionArea>
                <CardMedia
                  className={cardStyleClass.media}
                  image="https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&quality=90&v=1530129081"
                  title="Image"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {"Destino"}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Información sobre el destino
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Ver más
                </Button>
                <Button size="small" color="primary">
                  Reservar
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={6} sm={2}>
            <Card className={cardStyleClass.root}>
              <CardActionArea>
                <CardMedia
                  className={cardStyleClass.media}
                  image="https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&quality=90&v=1530129081"
                  title="Image"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {"Destino"}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Información sobre el destino
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Ver más
                </Button>
                <Button size="small" color="primary">
                  Reservar
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={6} sm={2}>
            <Card className={cardStyleClass.root}>
              <CardActionArea>
                <CardMedia
                  className={cardStyleClass.media}
                  image="https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&quality=90&v=1530129081"
                  title="Image"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {"Destino"}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Información sobre el destino
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Ver más
                </Button>
                <Button size="small" color="primary">
                  Reservar
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={6} sm={2}>
            <Card className={cardStyleClass.root}>
              <CardActionArea>
                <CardMedia
                  className={cardStyleClass.media}
                  image="https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&quality=90&v=1530129081"
                  title="Image"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {"Destino"}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Información sobre el destino
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Ver más
                </Button>
                <Button size="small" color="primary">
                  Reservar
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={6} sm={2}>
            <Card className={cardStyleClass.root}>
              <CardActionArea>
                <CardMedia
                  className={cardStyleClass.media}
                  image="https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&quality=90&v=1530129081"
                  title="Image"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {"Destino"}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Información sobre el destino
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Ver más
                </Button>
                <Button size="small" color="primary">
                  Reservar
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={6} sm={2}>
            <Card className={cardStyleClass.root}>
              <CardActionArea>
                <CardMedia
                  className={cardStyleClass.media}
                  image="https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&quality=90&v=1530129081"
                  title="Image"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {"Destino"}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Información sobre el destino
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Ver más
                </Button>
                <Button size="small" color="primary">
                  Reservar
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={6} sm={2}>
            <Card className={cardStyleClass.root}>
              <CardActionArea>
                <CardMedia
                  className={cardStyleClass.media}
                  image="https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&quality=90&v=1530129081"
                  title="Image"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {"Destino"}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Información sobre el destino
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Ver más
                </Button>
                <Button size="small" color="primary">
                  Reservar
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={6} sm={2}>
            <Card className={cardStyleClass.root}>
              <CardActionArea>
                <CardMedia
                  className={cardStyleClass.media}
                  image="https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&quality=90&v=1530129081"
                  title="Image"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {"Destino"}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Información sobre el destino
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Ver más
                </Button>
                <Button size="small" color="primary">
                  Reservar
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
export default Catalog;
