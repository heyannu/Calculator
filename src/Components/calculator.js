import React, { Component } from "react";
import Screen from "./calculator/screen.js";
import Grid from "@material-ui/core/Grid";
import "../Assets/css/todo.css";

export default class Calculator extends Component {
  render() {
    return (
      <div>
        <Grid container>
          <Grid item xs={12} sm={12} lg={12}>
            <center><Grid
              item
              xs={12}
              sm={12}
              lg={12}
              className="body_content"
              style={{ marginTop: "7em", alignContent:"center", justifyContent:"center"}}
            >
              <b>
                <h1 style={{ fontFamily: "Rajdhani"}}>
                  CALCULATOR
                </h1>
              </b>
              <Grid>
                <Screen />
              </Grid>
            </Grid>
            </center>
          </Grid>
          
        </Grid>
      </div>
    );
  }
}
