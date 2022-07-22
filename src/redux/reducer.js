import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import test from './reducer/test';
import commonUIReducer from './commanUI/reducer';
import authData from './auth/reducer';

const createReducer = asyncReducers =>
  combineReducers({
    test,
    commonUIReducer,
    authData,
    // When reducers are provided to createReducer they'll be plopped on here
    ...asyncReducers,
  });

const DEBUG = true;
const logger = createLogger({ collapsed: true });

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist,
        // actionsCreators, serialize...
      })
    : compose;

// Responsible for creating the redux store–and any associated work like middleware.
//
// The ideas here and in createReducer are directly from Dan:
// https://stackoverflow.com/a/33044701
// The difference is in how I inject reducers using withReducer()
const initializeStore = () => {
  // createStore returns a plain object so we'll mess with it after creation.
  let store;
  if (DEBUG) {
    store = createStore(createReducer(), composeEnhancers(applyMiddleware(thunk, logger)));
  } else {
    store = createStore(createReducer(), composeEnhancers(applyMiddleware(thunk)));
  }

  // const store = createStore(
  //   // See rootReducer.createReducer for more info on this. Calling it without
  //   // a param creates a reducer with whatever is in rootReducer.
  //   createReducer(),
  //   // NOTE: Don't put this in a prod build, just doing this for the demo.
  //   compose(applyMiddleware(thunk)),
  // );

  // Create an object for any later reducers
  store.asyncReducers = {};

  // Creates a convenient method for adding reducers later
  store.injectReducer = (key, reducer) => {
    // Updates the aysncReducers object. This ensures we don't remove any old
    // reducers when adding new ones.
    store.asyncReducers[key] = reducer;
    // This is the key part: replaceReducer updates the reducer
    // See rootReducer.createReducer for more details, but it returns a function.
    store.replaceReducer(createReducer(store.asyncReducers));
    return store;
  };

  return store;
};

export default initializeStore;
