import React, { useEffect } from 'react'
import { configureAxiosInterceptors } from './Api/Axios'
import Navigation from './Navigation'
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from "redux";
// import rootReducer from "./redux/reducers/rootReducer";
// import thunk from "redux-thunk";
// import logger from "redux-logger";

//const store = createStore(rootReducer, applyMiddleware(thunk, logger));
const App = (props) => {
  useEffect(() => {
    // Configure axios with auth token 
    configureAxiosInterceptors()
  }, [])

  return <Navigation />

  // return <Provider store={store}>
  //   <Navigation />
  // </Provider>
}

export default App;