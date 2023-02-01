import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import axios from "axios";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Paper from "@mui/material/Paper";

export default function Dashboard() {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = React.useState([]);

  async function apiCall() {
    let userdetailsData = await axios.get(
      `${import.meta.env.VITE_HOST}/getUserDetails`
    );
    setUserDetails(userdetailsData.data.data);
  }
  React.useEffect(() => {
    apiCall();
  }, []);

  return (
    <div>
      <Button
        style={{ position: "absolute", left: "3%", background: "white" }}
        onClick={() => {
          navigate("/");
        }}
      >
        HOME
      </Button>
      <h1 style={{ color: "white" }}>LEADERBOARD</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">
                <h2>Rank</h2>
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
            {userDetails.map((row, index) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left" component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell align="center" component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="center">{row.total_score}</TableCell>
                <TableCell align="center">
                  {row.updatedAt.toString().slice(0, 25)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
