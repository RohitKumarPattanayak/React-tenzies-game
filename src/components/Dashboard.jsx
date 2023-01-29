import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(id, name, score, date) {
  return { id, name, score, date };
}

let currentdate = new Date();
let datetime =
  currentdate.getDay() +
  "/" +
  currentdate.getMonth() +
  "/" +
  currentdate.getFullYear() +
  " " +
  currentdate.getHours() +
  ":" +
  currentdate.getMinutes() +
  ":" +
  currentdate.getSeconds();
const rows = [
  createData(1, "Frozen yoghurt", 159, 10.0),
  createData(2, "Ice cream sandwich", 237, 9.0),
  createData(3, "Eclair", 262, 16.0),
  createData(4, "Cupcake", 305, 3.7),
  createData(5, "Gingerbread", 356, 16.0),
];

export default function Dashboard() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">
              <h2>Id</h2>
            </TableCell>
            <TableCell align="center">
              <h2>Name</h2>
            </TableCell>
            <TableCell align="center">
              <h2>Total Score</h2>
            </TableCell>
            <TableCell align="center">
              <h2>Date</h2>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="center" component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.score}</TableCell>
              <TableCell align="center">{row.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
