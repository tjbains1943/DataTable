import React, { PureComponent, Fragment } from "react";
import NavBar from "../components/navBar";
import ContentArea from "../components/contentArea";

class LandingPage extends PureComponent {
  render() {
    return (
      <Fragment>
        <NavBar />
        <ContentArea />
      </Fragment>
    );
  }
}

export default LandingPage;
