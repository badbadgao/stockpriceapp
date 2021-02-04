import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useSelector } from 'react-redux';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const SummaryTable = () => {
  const classes = useStyles();
  const stockSummaryData = useSelector(state =>  state.stockPrice.stockSummary);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Stock</TableCell>
            <TableCell align="left">Starting</TableCell>
            <TableCell align="left">Lowest</TableCell>
            <TableCell align="left">Hightest</TableCell>
            <TableCell align="left">Current</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.values(stockSummaryData).map((row) => (
            <TableRow key={row.code}>
              <TableCell align="left">{row.code}</TableCell>
              <TableCell align="left">{row.startingPrice}</TableCell>
              <TableCell align="left">{row.lowestPrice}</TableCell>
              <TableCell align="left">{row.highestPrice}</TableCell>
              <TableCell align="left">{row.currentPrice}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default SummaryTable;
