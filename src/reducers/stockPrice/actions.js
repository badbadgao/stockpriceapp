import { TOGGLE_PAUSE, STOCK_PRICE_UPDATE_ADDED } from './actionTypes';
import { fetchPriceStockUpdate } from 'apiService';

export const togglePause = () => ({
  type: TOGGLE_PAUSE,
});

// The request is delayed 2 seconds or the interval defined in .env so that the request is not sent too frequent
const fetchStockPriceWithTimeout = () => dispatch => setTimeout(() => {
  dispatch(pullPriceStockUpdate());
}, process.env.REACT_APP_REQUEST_INTERVAL || 2000);


const stockPriceUpdateAdded = (stockPriceUpdateObj) => ({
  type: STOCK_PRICE_UPDATE_ADDED,
  payload: stockPriceUpdateObj,
});

export const pullPriceStockUpdate = () => dispatch => {
  fetchPriceStockUpdate().then(response => {
    response && dispatch(stockPriceUpdateAdded(response));
    dispatch(fetchStockPriceWithTimeout());
  }).catch(error => {
    console.log(error);
    dispatch(fetchStockPriceWithTimeout());
  });
};