// React
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// ?
import { IconButton, Typography, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
 
// Style
import { divCenterStyle } from "./CssStyles";

/* Catalog */
class Catalog extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      description: '',
      place: '',
      sits: 0,
      cost: 0,
      date: null,
      image: '',
      _id: '',
      places: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.addPlaceToCart = this.addPlaceToCart.bind(this);
  }


  componentDidMount() {
    this.fetchPlaces();
  }

  fetchPlaces() {
    fetch('/api/places')
      .then(res => res.json())
      .then(data => {
        this.setState({places: data});
        console.log(this.state.tasks)
      });
  }

  handleChange(e) {
    const {name, value} = e.target;
    this.setState({
      [name]: value
    });
  }

  addPlaceToCart(e) {
    console.log('Adding place to cart');
    e.preventDefault();
  }

  render() {
  return (
    <div>
      {/* My cart */}
      <Grid container>
        <Grid item xs={12}>
          <div style={{display: 'inline-block'}}>
            
        <Typography type="h2">{"Mi carrito"}</Typography>
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Paper variant="outlined">
            <div style={{paddingLeft: '10px', paddingRight: '10px', paddingBottom: '10px', paddingTop: '10px'}}>
            <Typography type="h4">{"Titulo"}</Typography>
            <Divider></Divider>
            <Typography variant="overline">{"Unidades x Precio"}</Typography>
            <br></br>
            <Typography variant="overline">{"Precio total de viaje"}</Typography>
            <Divider></Divider>
            <IconButton>
              <AddIcon fontSize="small"/>
            </IconButton>
            <IconButton>
              <RemoveIcon fontSize="small"/>
            </IconButton>
            <IconButton>
              <DeleteIcon fontSize="small"/>
            </IconButton>
            </div>
          </Paper>
        </Grid>
        </Grid>

        {/* Locations for travel */}
        <Grid container spacing={2}>
          {
            this.state.places.map(_place => {
              return (
                <Grid item xs={6} sm={3}>
            <Card>
              <CardActionArea>
                <CardMedia
                  style={{height: 140}}
                  image={_place.image}
                  title={_place.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {_place.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {_place.place}
                    <br></br>
                    {_place.description}
                    <br></br>
                    Asientos disponibles: {_place.sits}
                    <br></br>
                    Fecha de salida: {_place.date}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" onClick={this.addPlaceToCart}>
                  Reservar por {_place.cost}
                </Button>
              </CardActions>
            </Card>
          </Grid>
              )
            })
          }
        </Grid>
      </div>
  );
}
};
export default Catalog;
