// React
import React, { Component, useState } from "react";
import ReactDOM from "react-dom";

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
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

// Style
import { divCenterStyle } from "./CssStyles";

class Catalog extends Component {
    constructor() {
        super();
        this.state = {
            title: "",
            description: "",
            place: "",
            sits: 0,
            cost: 0,
            date: "",
            image: "",
            _id: "",
            places: [],
            ncart: 0,
            nsits: 0,
        };

        this.PlaceToOrder = class {
            constructor(
                titleParam,
                descParam,
                placeParam,
                sitsParam,
                costParam,
                dateParam,
                imageParam,
                _idParam
            ) {
                (this.title = titleParam),
                    (this.description = descParam),
                    (this.place = placeParam),
                    (this.boughtsits = sitsParam),
                    (this.cost = costParam),
                    (this.date = dateParam),
                    (this.image = imageParam),
                    (this._id = _idParam);
            }
        };

        this.Cart = class {
            /**
             * @param {PlaceToOrder} placesParam - An ARRAY of places that are gonna be added to the order
             * @param {number} totalParam - Total price of the order
             * @param {string} date - Date from when the order was placed
             */
            constructor(placesParam, totalParam, dateParam) {
                (this.places = placesParam),
                    (this.total = totalParam),
                    (this.date = dateParam);
            }
        };

        this.SitsOnly = class {
            constructor(_id, sits) {
                (this.id_s = _id),
                (this.sits_s = sits);
            }
        };

        this.arrayOfPlaces = [];
        this.arrayForSits = [];
        this.foo = 0;
        this.handleChange = this.handleChange.bind(this);
        this.addPlaceToCart = this.addPlaceToCart.bind(this);
        this.addSitToPlaceOnCart = this.addSitToPlaceOnCart.bind(this);
        this.completeOrder = this.completeOrder(this);
    }

    addPlaceToCart(id) {
            console.log('setState aqui');
            fetch(`/api/places/${id}`, {
                method: "GET",
                headers: {
                    'Accept': 'application/json',
                    'Content-type' : 'application/json',
                }
            })
            .then(res => res.json())
            .then(data => {
                var p = new this.PlaceToOrder(data.title, data.description, data.place, 1, data.cost, data.date, data.image, id);
                this.arrayOfPlaces.push(p);
                this.setState({ncart: this.arrayOfPlaces.length});
        });
    }

    addSitToPlaceOnCart(id) {
        console.log('setState aqui addSit en ' + id);
        fetch(`/api/places/${id}`, {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-type' : 'application/json',
            }
        })
        .then(res => res.json())
        .then(data => {
            for (let index = 0; index < this.arrayOfPlaces.length; index++) {
                if (this.arrayOfPlaces[index]._id == id) {
                    if (this.arrayOfPlaces[index].boughtsits + 1 <= data.sits) {
                        this.arrayOfPlaces[index].boughtsits++;
                        this.foo++;
                        this.setState({boughtsits: this.foo});
                        break;
                    }
                }
            }
    });
    }


    removeSitToPlaceOnCart(id) {
        console.log('setState aqui removeSit en ' + id);
        
        for (let index = 0; index < this.arrayOfPlaces.length; index++) {
            if (this.arrayOfPlaces[index]._id == id) {
                if (this.arrayOfPlaces[index].boughtsits - 1 >= 1) {
                    this.arrayOfPlaces[index].boughtsits--;
                    this.foo++;
                    this.setState({boughtsits: this.foo});
                    break;
                }
            }
        }
        
    }

    deletePlaceFromCart(id) {
        console.log('setState aqui removePlace en ' + id);
        
        for (let index = 0; index < this.arrayOfPlaces.length; index++) {
            if (this.arrayOfPlaces[index]._id == id) {
                this.arrayOfPlaces.splice(index, 1);
                this.foo++;
                this.setState({boughtsits: this.foo});    
                break;
            }
        }
    }

    componentDidMount() {
        this.fetchPlaces();
    }

    fetchPlaces() {
        fetch("/api/places")
            .then((res) => res.json())
            .then((data) => {
                this.setState({ places: data });
                console.log(this.state.places);
            });
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        });
    }

    completeOrder() {
        
/*
        fetch('/api/orders/', {
            method: "POST",
            body: JSON.stringify(new this.Cart(this.arrayOfPlaces, totalPriceOfOrder, "Todayy")),
            headers: {
                'Accept': 'application/json',
                'Content-type' : 'application/json',
            }
        })
        .then(res => console.log(res))
        .catch(err => console.log(err));
  */ 
    }

    getSits(id) {
        fetch(`/api/places/${id}`, {
            method: 'GET',        
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            return data.sits;
        });
    }

    render() {
        return (
            <div>
                {/* Cart */}
                <div>
                    <Grid container>
                        <Grid item xs={12}>
                            <div style={{ display: "inline-block" }}>
                                <Typography type="h2">
                                    {"Mi carrito"}
                                </Typography>
                            </div>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        {
                        this.arrayOfPlaces.map((element) => {
                            return(
                                <Grid item xs={2}>
                                    <Paper variant="outlined">
                                        <div
                                            style={{
                                                paddingLeft: "10px",
                                                paddingRight: "10px",
                                                paddingBottom: "10px",
                                                paddingTop: "10px",
                                            }}
                                        >
                                            <Typography type="h4">
                                                {element.title}
                                            </Typography>
                                            <Divider></Divider>
                                            <Typography variant="overline">
                                                {element.boughtsits + " x " + element.cost}
                                            </Typography>
                                            <br></br>
                                            <Typography variant="overline">
                                                {`Total ${element.boughtsits * element.cost}`}
                                            </Typography>
                                            <Divider></Divider>
                                            <IconButton onClick={() => this.addSitToPlaceOnCart(element._id)}>
                                                <AddIcon fontSize="small" />
                                            </IconButton>
                                            <IconButton onClick={() => this.removeSitToPlaceOnCart(element._id)}>
                                                <RemoveIcon fontSize="small" />
                                            </IconButton>
                                            <IconButton onClick={() => this.deletePlaceFromCart(element._id)}>
                                                <DeleteIcon fontSize="small" />
                                            </IconButton>
                                        </div>
                                    </Paper>
                                </Grid>
                            )
                        })}
                    </Grid>
                </div>
                <Button onClick={() => {
                    for(let i = 0; i < this.arrayOfPlaces.length; i = i + 1) {
                        console.log(this.arrayOfPlaces[i]._id + " ->" + i);
                        
                        for (let j = 0; j < this.arrayForSits.length; j = j + 1) {
                            if (this.arrayOfPlaces[i]._id == this.arrayForSits[j].id_s) {

                                fetch(`/api/places/${this.arrayOfPlaces[i]._id}`, {
                                    method: 'PUT',
                                    body: JSON.stringify({
                                        title: this.arrayOfPlaces[i].title,
                                        description: this.arrayOfPlaces[i].description,
                                        place: this.arrayOfPlaces[i].place,
                                        sits: this.arrayForSits[j].sits_s - this.arrayOfPlaces[i].boughtsits,
                                        cost: this.arrayOfPlaces[i].cost,
                                        date: this.arrayOfPlaces[i].date,
                                        image: this.arrayOfPlaces[i].image
                                    }),
                                    headers: {
                                        'Accept': 'application/json',
                                        'Content-type': 'application/json'
                                    }
                                })
                                .then(res => {
                                    /* Make it so you modify the data on the whole page */
                                    console.log(res);
                                }); 

                            }
                        }
                    }
                }}>
                    COMPRAR
                </Button>
                {/* Catalog */}
                <Grid container spacing={2}>
                    {this.state.places.map((_place) => {
                        this.arrayForSits.push(new this.SitsOnly(_place._id, _place.sits));
                        return (
                            <Grid item xs={6} sm={3}>
                                <Card>
                                    <CardActionArea>
                                        <CardMedia
                                            style={{ height: 140 }}
                                            image={_place.image}
                                            title={_place.title}
                                        />
                                        <CardContent>
                                            <Typography
                                                gutterBottom
                                                variant="h5"
                                                component="h2"
                                            >
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
                                                Asientos disponibles:{" "}
                                                {_place.sits}
                                                <br></br>
                                                Fecha de salida: {_place.date}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button
                                            size="small"
                                            color="primary"
                                            onClick={() =>
                                                this.addPlaceToCart(_place._id)
                                        }
                                        >
                                            Reservar por {_place.cost}
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        );
                    })}
                </Grid>
            </div>
        );
    }
}
export default Catalog;
