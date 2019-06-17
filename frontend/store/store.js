import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/root_reducer';

// @@@@@@   WITHOUT LOGGER @@@@@@
const configureStore = (preloadedState = {}) => {
  return createStore(
    rootReducer, 
    preloadedState, 
    applyMiddleware(thunk)
  )
};

// @@@@@@@   WITH LOGGER   @@@@@@@
// const configureStore = (preloadedState = {}) => {
//   return createStore(
//     rootReducer, 
//     preloadedState, 
//     applyMiddleware(thunk, logger)
//   )
// };

export default configureStore;