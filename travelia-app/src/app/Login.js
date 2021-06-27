// React
import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';

// Router
import { useHistory } from 'react-router-dom';
import History from "./History";

// Material-UI Components
import { Typography, TextField, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";

// Login
class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      message: '',
      dispMessage: 0,
      logged: 0,
    };

    this.handleChange = this.handleChange.bind(this);
    this.logIn = this.logIn.bind(this);
    this.signUp = this.signUp.bind(this);
    this.displayLogCard = this.displayLogCard.bind(this);
    this.displayMessage = this.displayMessage.bind(this);
  }

  componentDidMount() {
    this.displayLogCard();
  }

  // Handle changes made to states
  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
        [name]: value,
    });
  }

  // Sign-up
  signUp() {
    if (!this.state.email || !this.state.password) {
      this.setState({ message: 'Ingrese Correo electronico y Contraseña' });
      this.setState({ dispMessage: 1 });
      return;
    }

    let e = this.state.email;
    let p = this.state.password;

    fetch('/signup/', {
      method: 'POST',
      body: JSON.stringify({
        email: e,
        password: p
      }),
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => {
      if (data.auth == true) {
        localStorage.setItem('x-access-token', data.token);
        this.setState({ email: '' });
        this.setState({ password: '' });
      } else {
        this.setState({ message: data.message });
        this.setState({ dispMessage: 1 });
      }
    });
  }

  // Log-in
  logIn() {
    if (!this.state.email || !this.state.password) {
      this.setState({ message: 'Insert email and password' });
      this.setState({ dispMessage: 1 });
      return;
    }

    let e = this.state.email;
    let p = this.state.password;

    fetch('/signin/', {
      method: 'POST',
      body: JSON.stringify({
        email: e,
        password: p
      }),
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => {
      if (data.auth == true) {
        localStorage.setItem('x-access-token', data.token);
        this.setState({ email: '' });
        this.setState({ password: '' });
        this.setState({ dispMessage: 0 });
      } else {
        this.setState({ email: '' });
        this.setState({ password: '' });
        this.setState({ message: data.message });
        this.setState({ dispMessage: 1 });
      }
    });
  }

  displayLogCard() {
    if (!localStorage.getItem('x-access-token')) {
      return(
        <Grid item sm={12} md={4} xl={6}>
          <Card style={{flexGrow: 1}}>
            <CardContent>
              <form>
              <TextField
                name="email"
                onChange={this.handleChange}
                value={this.state.email}
                label="Correo electronico"
                style={{ margin: 8 }}
                helperText="Ej: jose@tuempresa.com"
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                style={{marginRight:'10px'}}
              />
              <TextField
                name="password"
                onChange={this.handleChange}
                value={this.state.password}
                label="Contraseña"
                style={{ margin: 8 }}
                placeholder="*********"
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                style={{marginRight:'10px'}}
              />
              </form>
            </CardContent>
            <CardActions
            style={{alignContent: 'center', alignItems: 'center', justifyContent: 'center', justifyItems: 'center'}}>
              <Button color="primary" onClick={this.logIn}>{"Iniciar sesion"}</Button>
              <Button color="primary" onClick={this.signUp}>{"Registrarme"}</Button>
            </CardActions>
          </Card>
        </Grid>
      );
    }

    const t = localStorage.getItem('x-access-token');

    fetch('/me', {
      method: 'GET',
      headers:  {
        'Accept': 'application/json',
        'Content-type': 'application/json',
        'x-access-token': t
      }
    })
    .then(res => res.json())
    .then(data => {
      if (data.auth == false) {
        // this.getLogCard();
        this.setState({ logged: 0 });
      } else {
        console.log(data._id + ' logged');
      }
    });
  }

  displayMessage() {
    if (this.state.dispMessage != 0) {
      return(
        <Grid item sm={12} md={4} xl={6}>
          <Card>
          <CardContent style={{alignContent: 'center', alignItems: 'center', justifyContent: 'center', justifyItems: 'center'}}>
            <Typography variant="body1" gutterBottom color="error">
              {this.state.message}
            </Typography>
          </CardContent>
          </Card>
        </Grid>
      );
    }
  }

  render() {
    return (
      <div style={{
        marginLeft: '32px',
        marginRight: '32px',
        marginTop: '20px',
        marginBottom: '20px'
      }}>
        <div style={{minWidth: 275}}>
          <Grid
            container
            spacing={2}
            direction="column"
            justify="center"
            alignItems="stretch"
          >
            {/* Log card */}
            {this.displayLogCard()}
            {/* Message */}
            {this.displayMessage()}
          </Grid>
        </div>
      </div>
    );  
  }
};

export default Login;
