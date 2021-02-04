import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Header from './Header';
import LogList from './LogList';
import { pullPriceStockUpdate } from 'reducers/stockPrice/actions';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    marginRight: '32px',
    height: '100%',
  },
  logHeader: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  logTitle: {
    fontSize: '32px',
  },
  logBody: {
    margin: '16px',
    height: '100%',
  }
});

const LogHistory = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(pullPriceStockUpdate());
  }, []);

  return (
    <div className={classes.root}>
      <Header />
      <Paper elevation={0} className={classes.logBody}>
        <LogList />
      </Paper>
    </div>
  )
};

export default LogHistory;