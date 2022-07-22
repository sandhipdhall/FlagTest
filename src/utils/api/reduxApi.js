import store from '../../redux/store';
import { apiCall } from './api';

const initialAPIState = {
  isLoading: false,
  response: null,
  error: null,
};

const returnReducer = reducerName => {
  return (state = initialAPIState, action) => {
    switch (action.type) {
      case `${reducerName}/IS_LOADING`:
        return {
          ...state,
          isLoading: true,
        };
      case `${reducerName}/API_SUCCESS`:
        return {
          ...state,
          isLoading: false,
          response: action.payload,
        };
      case `${reducerName}/API_FAIL`:
        return {
          ...state,
          isLoading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
};

export const apiCallWithRedux = async ({ reducerName, ...props }) => {
  const asyncReducerName = Object.keys(store.asyncReducers);
  if (!asyncReducerName.includes(reducerName)) {
    store.injectReducer(reducerName, returnReducer(reducerName));
  }

  // Loader True
  store.dispatch({ type: `${reducerName}/IS_LOADING`, payload: props });

  // API CAlling
  const apiData = await apiCall({ ...props });

  // Manage API response
  if (apiData.success) {
    store.dispatch({
      type: `${reducerName}/API_SUCCESS`,
      payload: apiData.response,
    });
  } else {
    store.dispatch({ type: `${reducerName}/API_FAIL`, payload: apiData.error });
  }
  return apiData;
};
