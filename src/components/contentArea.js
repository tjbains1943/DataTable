import React, { PureComponent } from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Table from "./recordsTable";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import DownloadIcon from "@material-ui/icons/SaveAlt";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import { connect } from "react-redux";
import { showStats, updateShowSnackbar } from "../redux/modules/landingPage";
import StatsModal from "./statsModal";
import SnackBarSuccess from "./snackBar";
import SearchFilters from "./searchFilters";

const styles = {
  boldText: {
    fontWeight: "bold",
  },
  iconStyle: {
    marginLeft: 8,
  },
  buttonText: {
    paddingRight: 16,
  },
};

class ContentArea extends PureComponent {
  handleStatsClick = () => {
    const { showStats, showStatsVal } = this.props;
    showStats(!showStatsVal);
  };

  handleSnackbarClose = () => {
    const { updateShowSnackbar } = this.props;
    updateShowSnackbar(false);
  };

  render() {
    const { classes, showStatsVal, showSnackBar, totalBudget } = this.props;

    return (
      <Container>
        <Box mt={10} mb={2}>
          <Box py={4}>
            <Box display="flex" pb={1} justifyContent="space-between">
              <Typography className={classes.boldText} variant="h5">
                Records Table
              </Typography>

              <Box display="flex" flexDirection="column">
                <Box mb={2}>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.buttonText}
                    onClick={this.handleStatsClick}
                  >
                    Show Statistics
                    <EqualizerIcon className={classes.iconStyle} />
                  </Button>
                </Box>
                <Button
                  variant="contained"
                  color="default"
                  className={classes.buttonText}
                >
                  EXPORT
                  <DownloadIcon className={classes.iconStyle} />
                </Button>
              </Box>
            </Box>
            <Typography variant="body1">
              This table displays all the records. Click on the title for more
              info on each record.
            </Typography>
          </Box>
          <Box mt={3}>
            <SearchFilters />
          </Box>
          <Box mb={2}>
            <Table />
          </Box>
        </Box>
        <Box my={2}>
          <Button variant="contained" color="primary">
            Add a New Record
          </Button>
        </Box>
        <StatsModal isOpen={showStatsVal} handleClose={this.handleStatsClick} budgetValue={totalBudget}/>
        <SnackBarSuccess
          isOpen={showSnackBar}
          handleClose={this.handleSnackbarClose}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  showStatsVal: state.dataTable.showStats,
  showSnackBar: state.dataTable.showSnackBar,
  totalBudget: state.dataTable.totalBudget,
});

const mapDispatchToProps = {
  showStats,
  updateShowSnackbar,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(ContentArea));
