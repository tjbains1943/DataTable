import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import records from "../utils/transformData";

class RecordsTable extends PureComponent {
  render() {
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
          {records.map((record, index) => (
            <TableRow key={index}>
              <TableCell>{record.title}</TableCell>
              <TableCell align="right">{record.division}</TableCell>
              <TableCell align="right">{record.project_owner}</TableCell>
              <TableCell align="right">{record.budjet}</TableCell>
              <TableCell align="right">{record.status}</TableCell>
              <TableCell align="right">{record.created}</TableCell>
              <TableCell align="right">{record.modified}</TableCell>
            </TableRow>
          ))}
          <TableBody />
        </Table>
      </Paper>
    );
  }
}

export default RecordsTable;
