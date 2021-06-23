// React
import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';

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
            <Grid item sm={12} md={4} xl={6}>
              <Card style={{flexGrow: 1}}>
                <CardContent>
                  <form>
                  <TextField
                    id="loginmail"
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
                    id="loginpass"
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
                  <Button color="primary">{"Iniciar sesion"}</Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </div>
      </div>
    );  
  }
};

export default Login;
