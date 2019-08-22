import React, { PureComponent, Fragment } from "react";
import NavBar from "../components/navBar";
import ContentArea from "../components/contentArea";
import { makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles({
//   root: {
//     position: 'fixed',
//     bottom: 16,
//     right: 16,
//   },
// });

class LandingPage extends PureComponent {
  render() {
    // const classes = useStyles();
    return (
      <Fragment>
        <NavBar />
        <ContentArea />
      </Fragment>
    );
  }
}

export default LandingPage;
