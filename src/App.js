import { makeStyles } from '@material-ui/core/styles'
import LogHistory from 'components/LogHistory';
import LogSummay from 'components/LogSummay';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    width: '100%',
    height: '100vh',
    backgroundColor: '#dcdcdc',
  },
  log: {
    width: '40%',
  },
  summary: {
    width: '60%',
  }
});

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.log}>
        <LogHistory />
      </div>
      <div className={classes.summary}>
        <LogSummay />
      </div>
    </div>
  );
}

export default App;
