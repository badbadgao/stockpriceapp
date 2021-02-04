import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import SummaryTable from './SummaryTable';

const useStyles = makeStyles({
  root: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  summaryBody: {
    flex: '1',
    width: '100%',
    margin: '16px 0',
  },
  summaryTitle: {
    fontSize: '32px',
    margin: '16px',
  }
});

const LogSummary = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.summaryTitle}>
        Summay
      </div>
      <Paper elevation={0} className={classes.summaryBody}>
        <SummaryTable />
      </Paper>
    </div>
  )
};

export default LogSummary;