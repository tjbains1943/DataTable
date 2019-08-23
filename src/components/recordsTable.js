import React, { PureComponent } from "react";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Link from "@material-ui/core/Link";
import { connect } from "react-redux";
import Input from "@material-ui/core/Input";
import { withStyles } from "@material-ui/styles";
import { updateRecordValues } from "../redux/modules/landingPage";

const styles = {
  cellWidth: {
    padding: "inherit",
  },
};

class RecordsTable extends PureComponent {
  handleOnChange = (type, index) => ({ target: { value } }) => {
    const { records, updateRecordValues } = this.props;
    const newRecords = records.map((val, id) => {
      if (index === id) {
        const newValue = { ...val, [type]: value };
        return newValue;
      }
      return val;
    });
    updateRecordValues(newRecords);
  };

  render() {
    const { records, classes } = this.props;
    return (
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell align="right">Division</TableCell>
              <TableCell align="right">Project Owner</TableCell>
              <TableCell align="right">Budget</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Created</TableCell>
              <TableCell align="right">Modified</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {records.map((record, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Link component="button" color="secondary">
                    {record.title}
                  </Link>
                </TableCell>
                <TableCell align="right">{record.division}</TableCell>
                <TableCell className={classes.cellWidth} align="right">
                  <Input
                    onChange={this.handleOnChange("project_owner", index)}
                    value={record.project_owner}
                  />
                </TableCell>
                <TableCell align="right">
                  <Input
                    onChange={this.handleOnChange("budget", index)}
                    value={record.budget}
                  />
                </TableCell>
                <TableCell align="right">
                  <Input
                    onChange={this.handleOnChange("status", index)}
                    value={record.status}
                  />
                </TableCell>
                <TableCell align="right">{record.created}</TableCell>
                <TableCell align="right">{record.modified}</TableCell>
                <TableCell />
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

const mapStateToProps = state => ({
  records: state.dataTable.records,
});

const mapDispatchToProps = {
  updateRecordValues,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(RecordsTable));
