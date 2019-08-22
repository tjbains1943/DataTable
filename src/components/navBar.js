import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
class NavBar extends PureComponent {
  render() {
    return (
      <Fragment>
        <AppBar>
          <Toolbar>
            <Typography variant="h6">Project Dashboard</Typography>
          </Toolbar>
        </AppBar>
      </Fragment>
    );
  }
}

export default NavBar;
