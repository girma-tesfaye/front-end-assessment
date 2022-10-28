import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    tablewrap: {
        backgroundColor: "transparent"
    },
    table: {
        minWidth: 500,
    },
    tableHCell: {
        color: "#fff",
        borderBottom: "1px solid #3c4854",
        lineHeight: 1,
        padding: 11,
        textAlign: "left"
    },
    tableCell: {
        color: "#fff",
        borderBottom: "1px solid #3c4854",
        opacity: ".7",
        lineHeight: 1,
        padding: 11,
        textAlign: "left"
    }
});

function createData(name, calories) {
  return { name, calories};
}

const rows = [
  createData('date', "date"),
  createData('device_type', "character varrying"),
  createData('country', "character varrying"),
  createData('sessions', "integer"),
  createData('reveneu', "integer"),
];

export default function DataTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.tablewrap}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableHCell}>Field</TableCell>
            <TableCell align="right" className={classes.tableHCell}>Type</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row" className={classes.tableCell}>
                {row.name}
              </TableCell>
              <TableCell align="right" className={classes.tableCell}>{row.calories}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}