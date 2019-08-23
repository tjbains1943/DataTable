import React, { PureComponent } from "react";
import SearchIcon from "@material-ui/icons/Search";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/styles";
import grey from "@material-ui/core/colors/grey";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import {
  updateFilters,
  updateFilteredRecords,
} from "../redux/modules/landingPage";
import InputLabel from "@material-ui/core/InputLabel";

const styles = theme => ({
  paper: {
    background: grey[300],
    padding: theme.spacing(2),
  },
  searchIcon: {
    marginLeft: 8,
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
});

class SearchFilters extends PureComponent {
  constructor() {
    super();
    this.state = {
      createdStart: null,
      createdEnd: null,
      modStart: null,
      modEnd: null,
    };
  }

  // run date filter if applicable
  componentDidUpdate() {
    const { createdEnd, createdStart, modEnd, modStart } = this.state;
    const { searchFilters } = this.props;

    if (createdEnd && createdStart) {
      const newRecords = this.checkIfDateValid("created");
      this.handleTableDateFilterValues(searchFilters, newRecords);
    }

    if (modEnd && modStart) {
      const newRecords = this.checkIfDateValid("modified");
      this.handleTableDateFilterValues(searchFilters, newRecords);
    }
  }

  // todo - refactor
  // checks if date valid using ms since epoch
  checkIfDateValid = type => {
    const { createdEnd, createdStart, modEnd, modStart } = this.state;
    const { initialRecords } = this.props;
    if (type === "modified") {
      const newRecords = initialRecords.filter((record, index) => {
        if (record.modified) {
          const createDate = new Date(record.modified);
          const getCurrent = moment(createDate).unix();
          const startCreated = new Date(modStart);
          const momentStart = moment(startCreated).unix();
          const endCreated = new Date(modEnd);
          const momentEnd = moment(endCreated).unix();
          if (
            Number(momentEnd) > Number(getCurrent) &&
            Number(getCurrent) > Number(momentStart)
          ) {
            return true;
          }
          return false;
        }
        return false;
      });
      return newRecords;

    } else {
      const newRecords = initialRecords.filter((record, index) => {
        if (record.created) {
          const createDate = new Date(record.created);
          const getCurrent = moment(createDate).unix();
          const startCreated = new Date(createdStart);
          const momentStart = moment(startCreated).unix();
          const endCreated = new Date(createdEnd);
          const momentEnd = moment(endCreated).unix();
          if (
            Number(momentEnd) > Number(getCurrent) &&
            Number(getCurrent) > Number(momentStart)
          ) {
            return true;
          }
          return false;
        }
        return false;
      });
      return newRecords;
    }
  };


  // handles change of Date
  formatDates = () => {};
  handleDateChange = type => date => {
    this.setState({
      [type]: date,
    });
  };

  handleSearchFilters = type => ({ target: { value } }) => {
    const { updateFilters, searchFilters } = this.props;
    const newFilters = {
      ...searchFilters,
      [type]: value,
    };
    updateFilters(newFilters);
    this.handleTableDateFilterValues(newFilters);
  };

  // handle all filters for search section
  handleTableDateFilterValues = (filters, records) => {
    const { initialRecords, updateFilteredRecords } = this.props;
    let finalRecords;
    if (records) {
      finalRecords = records;
    } else finalRecords = initialRecords;
    const newRecords = finalRecords.filter(function(item) {
      for (var key in filters) {
        if (
          item[key] === undefined ||
          item[key].toLowerCase().indexOf(filters[key].toLowerCase()) === -1
        )
          return false;
      }
      return true;
    });
    updateFilteredRecords(newRecords);
  };

  render() {
    const { classes } = this.props;
    const { createdEnd, createdStart, modEnd, modStart } = this.state;
    return (
      <Paper className={classes.paper}>
        <Box display="flex" mb={1}>
          <Typography variant="h6">Search/Filters</Typography>
          <SearchIcon className={classes.searchIcon} />
        </Box>
        <Typography variant="subtitle2">
          Use the different filters to narrow down records. Please input Start
          and End date for date filters.
        </Typography>
        <Box display="flex" flexWrap="wrap">
          <TextField
            id="standard-search"
            label="Title"
            type="search"
            className={classes.textField}
            margin="normal"
            onChange={this.handleSearchFilters("title")}
          />
          <TextField
            id="standard-search"
            label="Division"
            type="search"
            className={classes.textField}
            margin="normal"
            onChange={this.handleSearchFilters("division")}
          />
          <TextField
            id="standard-search"
            label="Project Owner"
            type="search"
            className={classes.textField}
            margin="normal"
            onChange={this.handleSearchFilters("project_owner")}
          />
          <TextField
            id="standard-search"
            label="Budget"
            type="search"
            className={classes.textField}
            margin="normal"
            onChange={this.handleSearchFilters("budget")}
          />
          <TextField
            id="standard-search"
            label="Status"
            type="search"
            className={classes.textField}
            margin="normal"
            onChange={this.handleSearchFilters("status")}
          />
          <Box className={classes.textField}>
            <InputLabel>Created - Start Date</InputLabel>
            <DatePicker
              dateFormat={"MM/dd/yyyy"}
              selected={createdStart}
              selectsStart
              startDate={createdStart}
              endDate={createdEnd}
              onChange={this.handleDateChange("createdStart")}
            />

            <InputLabel>End Date</InputLabel>
            <DatePicker
              selected={createdEnd}
              selectsEnd
              startDate={createdStart}
              endDate={createdEnd}
              onChange={this.handleDateChange("createdEnd")}
              minDate={createdStart}
            />
          </Box>

          <Box className={classes.textField}>
            <InputLabel>Modified - Start Date</InputLabel>
            <DatePicker
              selected={modStart}
              selectsStart
              startDate={modStart}
              endDate={modEnd}
              onChange={this.handleDateChange("modStart")}
            />

            <InputLabel>End Date</InputLabel>
            <DatePicker
              selected={modEnd}
              selectsEnd
              startDate={modStart}
              endDate={modEnd}
              onChange={this.handleDateChange("modEnd")}
              minDate={modStart}
            />
          </Box>
        </Box>
      </Paper>
    );
  }
}

const mapStateToProps = state => ({
  searchFilters: state.dataTable.searchFilters,
  initialRecords: state.dataTable.initialRecords,
});

const mapDispatchToProps = { updateFilters, updateFilteredRecords };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles, { withTheme: true })(SearchFilters));
