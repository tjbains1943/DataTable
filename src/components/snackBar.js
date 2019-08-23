import React, { PureComponent } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import CloseIcon from "@material-ui/icons/Close";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import IconButton from "@material-ui/core/IconButton";
import { withStyles } from "@material-ui/styles";
import { green } from "@material-ui/core/colors";

const styles = {
  successStyles: {
    background: green[400],
  },
  message: {
    marginRight: 16,
  },
};

class SnackBarSuccess extends PureComponent {
  render() {
    const { isOpen, handleClose, classes } = this.props;
    return (
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        open={isOpen}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <SnackbarContent
          className={classes.successStyles}
          aria-describedby="snackbar"
          message={
            <span id="snackbar">
              <CheckCircleIcon className={classes.message} />
              Records were successfully updated!
            </span>
          }
          action={[
            <IconButton
              key="close"
              aria-label="close"
              color="inherit"
              onClick={handleClose}
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
      </Snackbar>
    );
  }
}

export default withStyles(styles)(SnackBarSuccess);
