import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Container, createTheme, ThemeProvider } from "@material-ui/core";

const useStyles = makeStyles({
  row: {
    backgroundColor: "white",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "teal",
    },
    fontFamily: "Bungee",
  },
});

const StyledTableCell = withStyles((theme) => ({
  head: {
    fontFamily: "Bungee",
  },
  body: {
    fontSize: 18,
    align: "center",
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: "",
    },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("CoinGeckoAPI", "https://www.coingecko.com/en/api/documentation"),
];

export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <Container fixed style={{ textAlign: "center" }}>
      <TableContainer component={Paper}>
        <Table
          className={classes.table}
          aria-label="customized table"
          size="small"
        >
          <TableHead style={{ backgroundColor: "#2eb8b8" }}>
            <TableRow>
              <StyledTableCell align="center">API's</StyledTableCell>
              <StyledTableCell align="center">LINKS</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell
                  style={{ fontFamily: "Bungee" }}
                  align="center"
                  component="th"
                  scope="row"
                >
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="center">{row.calories}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
