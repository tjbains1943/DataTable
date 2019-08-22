import React, { PureComponent } from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Table from "./recordsTable";
import Typography from "@material-ui/core/Typography";

class ContentArea extends PureComponent {
  render() {
    return (
      <Container>
        <Box mt={10} mb={2}>
          <Typography variant="p">Records Table</Typography>
          <Box my={2}>
            <Table />
          </Box>
        </Box>
      </Container>
    );
  }
}

export default ContentArea;
