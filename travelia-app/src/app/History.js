// React
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Material-UI
import {
  Typography,
  Grid,
  Paper,
  Card,
  Button,
  Divider,
  CardContent,
  CardActions,
} from "@material-ui/core";

// Icons
import Image from "material-ui-image";

/* History */
class History extends Component {
  render() {
    return (
      <div id="apphistory">
        <div>
          <Grid container spacing={1} justify="center">
            {/* Individual cards show visited places over the time */}
            <Grid item xs={12} sm={12}>
              <Card className={cardStyleClass.root}>
                <Grid container spacing={2} justify="center">
                  <Grid item sm={1} xs={4}>
                    <div style={{ height: "145px", width: "145px" }}>
                      <Image src="https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&quality=90&v=1530129081" />
                    </div>
                  </Grid>
                  <Grid item sm={11} xs={8}>
                    <CardContent>
                      <Typography variant="h6" component="h1">
                        {"Destino"}
                      </Typography>
                      <Typography variant="body2" component="p">
                        {"Fecha de inicio"}
                      </Typography>
                      <Typography variant="body2" component="p">
                        {"Costo del viaje"}
                      </Typography>
                      <Typography variant="body2" component="p">
                        {"ID de orden"}
                      </Typography>
                    </CardContent>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
};
export default History;
