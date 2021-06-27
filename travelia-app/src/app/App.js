// React
import React from 'react';
import ReactDOM from 'react-dom';

// Material-UI
import {
  Button,
  Typography,
  AppBar,
  Toolbar,
  Divider,
  CssBaseline,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import FlightTakeoffIcon from "@material-ui/icons/FlightTakeoff";
import Image from "material-ui-image";

// Router
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

// Pages for the Router
import History from "./History";
import Catalog from "./Catalog";
import Login from "./Login";
import Home from "./Home";

// Style
import { gridStyle } from "./CssStyles";

const backgroundStyle = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundImage: `url(${process.env.PUBLIC_URL + "/static/media/bg.jpg"})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  content: {
    paddingTop: "2px",
    paddingRight: "12px",
    paddingLeft: "12px",
    paddingBottom: "18px",
  },
}));

const avatarStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const avatarIconStyle = makeStyles({
  root: {
    marginLeft: "12px",
    marginRight: "2px",
  },
});

/* App */
function App() {
  // Styles used in the Top bar
  const gridStyleClass = gridStyle();
  const avatarStyleClass = avatarStyle();
  const avatarIconStyleClass = avatarIconStyle();
  const backgroundStyleClass = backgroundStyle();

  return (
    <Router>
      {/* Put the background image in the whole div and ignore default margins by Material with CssBaseLine*/}
      <div className={backgroundStyleClass.root}>
        <CssBaseline />

        {/* AppBar */}
        <div className={gridStyleClass.root}>
          <AppBar position="static">
            <Toolbar>
              <Grid
                container
                spacing={3}
                direction="row"
                justify="space-between"
                alignItems="center"
              >
                <Grid item>
                  {/* LOGO */}
                  <div>
                    <Link to="/" style={{ color: "white" }}>
                      <Button>
                        <div style={{ height: "30px", width: "30px" }}>
                          <Image src="/static/media/logo_black.png" />
                        </div>
                      </Button>
                    </Link>
                    {/* Travels List */}
                    <Link to="/Catalog" style={{ color: "white" }}>
                      <Button color="inherit">
                        <FlightTakeoffIcon fontSize="small" />
                        <Divider
                          orientation="vertical"
                          flexItem
                          variant="fullWidth"
                          light="true"
                        />
                        <div>{"Lugares"}</div>
                      </Button>
                    </Link>
                  </div>
                </Grid>

                {/* Show user or Login/Register button */}
                <Grid item>
                  <div className={avatarStyleClass.root}>
                  <Link to="/History" style={{ color: "white" }}>
                      <Button color="inherit" style={{marginTop: '10px'}}>
                        {"My history"}
                      </Button>
                    </Link>
                    <Link to="/Login" style={{ color: "white" }}>
                      <Button color="inherit">
                        {"Login/Register"}
                        <div className={avatarIconStyleClass.root}>
                          <Avatar
                            alt="Avatar"
                            src="/static/media/avatar-default.png"
                          />
                        </div>
                      </Button>
                    </Link>
                  </div>
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>
        </div>
        <br></br>

        {/* Content (Routes) of the webpage */}
        <div className={backgroundStyleClass.content}>
          <Switch>
            <Route exact path="/History">
              <History />
            </Route>
            <Route exact path="/Catalog">
              <Catalog />
            </Route>
            <Route exact path="/Login">
              <Login />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>

          {/* Footer, disclaimer and something else */}
          <footer>
            <br></br>
            <Divider />
            <br></br>
            <Grid container spacing={2} justify="center">
              <Grid item xs={10}>
                <div>
                  <Typography variant="caption">
                    {
                      "Travelia 2021 was made for educational purposes and doesn't pretend or aim to have any monetary benefit. This is a demo site made for a project of Software Engineering Course, we don't sell shit or at least not that I know."
                    }
                  </Typography>

                  <Typography variant="caption">
                    {" Check the source code on "}
                  </Typography>
                  <Typography variant="caption">{"GitHub"}</Typography>
                </div>
              </Grid>
              <br></br>
            </Grid>
          </footer>
        </div>
      </div>
    </Router>
  );
}

export default App;
