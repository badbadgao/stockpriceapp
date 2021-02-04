import { TOGGLE_PAUSE, STOCK_PRICE_UPDATE_ADDED } from './actionTypes';
import moment from 'moment';

const initialState = {
  isLoadingLogPaused: false,
  logListData: [],
  stockSummary: {},
};

/**
 * Update the stock summary with the given array of stock price updates
 * @param {*} stockSummary 
 * @param {*} stockPriceUpdateArray 
 */
const updateStockSummary = (stockSummary, stockPriceUpdateArray) => {
  stockPriceUpdateArray.forEach(stockPriceObj => {
    const stockSummaryObj = stockSummary[stockPriceObj.code];
    if(stockSummaryObj) {
      const currentPrice = stockPriceObj.price;
      const currentLowestPrice = stockSummaryObj.lowestPrice;
      const currentHighestPrice = stockSummaryObj.highestPrice;
      const lowestPrice = currentPrice < currentLowestPrice ? currentPrice : currentLowestPrice;
      const highestPrice = currentPrice > currentHighestPrice ? currentPrice : currentHighestPrice;

      stockSummary[stockPriceObj.code] = {
        ...stockSummaryObj,
        currentPrice,
        lowestPrice,
        highestPrice,
      };
    }
    else {
      const code = stockPriceObj.code;
      const currentPrice = stockPriceObj.price;
      const startingPrice = currentPrice;
      const highestPrice = currentPrice;
      const lowestPrice = currentPrice;
      stockSummary[stockPriceObj.code] = {
        code,
        startingPrice,
        lowestPrice,
        currentPrice,
        highestPrice,
      };
    }
  });
};

/**
 * Update the stock price state with the given stock price updates
 * @param {*} state 
 * @param {*} stockPriceUpdateArray 
 */
const updateStockPriceState = (state, stockPriceUpdateArray) => {
  const { logListData, stockSummary , isLoadingLogPaused } = state;

  const currentIime = moment().format('YYYY-MM-DD HH:mm:ss');

  const updatedStockSummary = updateStockSummary(stockSummary, stockPriceUpdateArray);

  // Update the list of logs if it is NOT paused
  if(!isLoadingLogPaused) {
    const stockPriceUpdateObj = {
      updateTime: currentIime,
      list: stockPriceUpdateArray,
    };
    logListData.push(stockPriceUpdateObj);
  }

  return {
    ...state,
    logListData: [...logListData],
    stockSummary: {
      ...stockSummary,
      ...updatedStockSummary
    }
  };
}

const stockPriceReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_PAUSE: {
      return {
        ...state,
        isLoadingLogPaused: !state.isLoadingLogPaused
      };
    }
    case STOCK_PRICE_UPDATE_ADDED: {
      return updateStockPriceState(state, action.payload);
    }
    default:
      return state;
  }
}


export default stockPriceReducer;