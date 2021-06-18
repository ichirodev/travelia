// React
import React from 'react';
import ReactDOM from 'react-dom';

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

// Style
import { gridStyle, divCenterStyle } from "./CssStyles";

const cardStyle = makeStyles({
  root: {
    maxWidth: 260,
  },
});

/* Login */
const Login = () => {
  const gridStyleClass = gridStyle();
  const cardStyleClass = cardStyle();
  const divCenterStyleClass = divCenterStyle();

  return (
    <div className={divCenterStyleClass.div}>
      <div className={gridStyleClass.root}>
        <Grid
          container
          spacing={2}
          direction="row"
          justify="center"
          alignItems="stretch"
        >
          <Grid item sm={12} md={2} xl={2}>
            <Card className={cardStyleClass.root}>
              <CardContent>
                <form>
                  <TextField
                    id="email"
                    label="Correo electronico"
                    variant="outlined"
                    style={{
                      margin: 8,
                    }}
                  />
                  <TextField
                    id="password"
                    label="Contraseña"
                    variant="outlined"
                    style={{
                      margin: 8,
                    }}
                  />
                </form>
              </CardContent>
              <Divider></Divider>
              <CardActions>
                <div style={{ marginLeft: "33%" }}>
                  <Button size="small" color="primary" style={{ margin: 2 }}>
                    {"Ingresar"}
                  </Button>
                </div>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
export default Login;
