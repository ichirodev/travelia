// React
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// ?
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
    //this.addPlace = this.addPlace.bind(this);
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

  render() {
  return (
    <div>
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
                <Button size="small" color="primary">
                  Ver más
                </Button>
                <Button size="small" color="primary">
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
