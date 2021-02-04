import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { togglePause } from 'reducers/stockPrice/actions';
import { useDispatch, useSelector } from 'react-redux';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '16px',
  },
  logTitle: {
    fontSize: '32px',
  },
  toggleButton: {
    width: '100px'
  }
});

const Header = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const isLoadingLogPaused = useSelector(state => state.stockPrice.isLoadingLogPaused);

  const clickHanlder = () => {
    dispatch(togglePause());
  };
  
  return (
    <div className={classes.root}>
      <div className={classes.logTitle}>
        Log
      </div>
      <Button
        variant="contained"
        color="primary"
        className={classes.toggleButton}
        onClick={clickHanlder}
      >
        {isLoadingLogPaused ? 'Resume' : 'Pause'}
      </Button>
    </div>
  )
};

export default Header;