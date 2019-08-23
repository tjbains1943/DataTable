import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Modal from "@material-ui/core/Modal";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/styles";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Box from "@material-ui/core/Box";

const styles = {
  modal: {
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modalSize: {
    width: "50%",
    height: "35%",
  },

  closeButton: {
    "&:hover": {
      background: "rgba(0,0,0,0)",
    },
  },
};

class StatsModal extends PureComponent {
  static propTypes = {
    isOpen: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
    budgetValue: PropTypes.string.isRequired,
  };

  render() {
    const { isOpen, handleClose, classes, budgetValue } = this.props;

    return (
      <Modal
        className={classes.modal}
        aria-labelledby="modal-title"
        aria-describedby="modal-budget"
        open={isOpen}
        onClose={handleClose}
      >
        <Paper className={classes.modalSize} p={4}>
          <Box display="flex" justifyContent="space-around">
            <Box />
            <h2 id="modal-title">Statistics</h2>
            <IconButton
              key="close"
              aria-label="close"
              color="inherit"
              onClick={handleClose}
              className={classes.closeButton}
            >
              <CloseIcon />
            </IconButton>
          </Box>

          <p id="modal-budget">
            {`The total budget for records shown is $${budgetValue}`}
          </p>
        </Paper>
      </Modal>
    );
  }
}

export default withStyles(styles)(StatsModal);
