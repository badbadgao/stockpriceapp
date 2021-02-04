# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn`
and
### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:9898](http://localhost:9898) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### Configurartion 
- PORT: edit the value in the .env file in the root folder can change the port number of the node server.
- REACT_APP_REQUEST_INTERVAL: edit this value in the .env file in the root folder can change the frequency of fetching the stock price update. The unit is a millisecond. If not set, the default will be 2 seconds.

### Libraries used
- create-react-app: used for creating the react app
- react: version above 17 is required
- @material-ui/core: a popular ui library for react
- redux: a library for state management
- redux-thunk: thunks are the recommended middleware for basic Redux side effects logic, including complex synchronous logic that needs access to the store, and simple async logic like AJAX requests.
- moment: used for format time and date
- axios: promise-based HTTP client for the browser and node.js
- react-window: used for improving the performance for a big list. FixedSizeList is used for rendering the list of log history.
- redux-logger: a middleware for printing out redux actions and state 

### Assumption
- The page is based on the assumption that the stock price array returned from the API call has 10 different records so that it has a good look-and-feel for the FixedSizeList with fixed `itemSize` which is required for the list.