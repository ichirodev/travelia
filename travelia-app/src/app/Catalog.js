// React
import React, { Component, useState } from "react";
import ReactDOM from "react-dom";

// Material-UI components
import { IconButton, Typography, Divider } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";

// Icons
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

// Catalog
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
    }

    // add place to cart
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

    // add sit on a selected place
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

    // remove sit on a selected place
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

    // delete from cart
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

    // fetch the Places shown on the catalog, can be used to restart the state and re-render
    fetchPlaces() {
        fetch("/api/places")
            .then((res) => res.json())
            .then((data) => {
                this.setState({ places: data });
            });
    }

    // Handle changes made to states
    handleChange(e) {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        });
    }

    render() {
        return (
            <div>
                {/** 
                 * C A R T
                 */}
                <div>
                    {/* Rendering selected items */}
                    <Grid container spacing={2} style={{marginLeft: '10px', marginRight: '10px'}}>
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
                                                {element.title} | {element.date}
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
                    {/* Cart legend and button */}
                    <Divider style={{margin: '10px'}}></Divider>
                    <Grid container spacing={2} 
                    direction="row"
                    justify="flex-end"
                    alignItems="center"
                    >
                        <Grid item xs={6} sm={11}>
                            <Typography variant="h6">
                                {"Mi carrito"}
                            </Typography>
                        </Grid>
                        <Grid item xs={6} sm={1}>
                        {/* Buy button with its buy function */}
                        <Button variant="contained" color="secondary" onClick={() => {
                            /* Look at every place selected by the user */
                            for(let i = 0; i < this.arrayOfPlaces.length; i = i + 1) {
                                /* Search the id of the place at index i and get the number of available sits */
                                for (let j = 0; j < this.arrayForSits.length; j = j + 1) {
                                    /* When the ids of both searches are the same fetch an update of the selected places
                                    with the new data, mostly modifying the left sits*/
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
                                            /* Response from every PUT */
                                            console.log(res);
                                        }); 
                                    }
                                }
                            }

                            /* Calculate total cost */
                            var totalOrderCost = 0;
                            for (let k = 0; k < this.arrayOfPlaces.length; k++) {
                                /* Get total cost of the order */
                                totalOrderCost = totalOrderCost + (this.arrayOfPlaces[k].boughtsits * this.arrayOfPlaces[k].cost);
                            }
                            
                            /* POST the order to the db */
                            fetch('/api/orders/', {
                                method: 'POST',
                                body: JSON.stringify({
                                    places: this.arrayOfPlaces,
                                    total: totalOrderCost,
                                    date: '27/06/21'
                                }),
                                headers: {
                                    'Accept': 'application/json',
                                    'Content-type': 'application/json'
                                }
                            })
                            .then(res => {
                                res.json();
                                /* Restore the states and arrays to a initial state */
                                this.arrayOfPlaces = [];
                                this.arrayForSits = [];
                                this.foo = 0;
                                this.setState({ ncart: 0 });
                                this.setState({ nsits: 0 });    
                                /* Once done the posts and puts
                                Fetch places to update shown places data and quit Cart from render */
                                this.fetchPlaces();
                            })
                            .then(data => {
                                console.log(data);
                            });
                        }}>{"Comprar"}</Button>
                        </Grid>
                    </Grid>
                </div>
                
                {/**
                 * C A T A L O G
                 */}
                <Grid container spacing={2}>
                    {/* Show the list of available places to buy */}
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
