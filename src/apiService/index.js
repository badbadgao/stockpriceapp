import clientProxy from './clientProxy';

const apiUri = 'https://join.reckon.com/stock-pricing';

export const fetchPriceStockUpdate = () => new Promise((resolve, reject) => {
  clientProxy.get(apiUri)
    .then(response => {
      if(response) {
        console.log('New stock price update received');
      }
      else {
        console.log("No update found")
      }
      resolve(response);
  }).catch(error => {
    reject(error);
  });
});