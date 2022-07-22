import * as actions from './actions';

const initialState = {
  isGuestUser: false,
  isLoggedInUser: false,
};

export default function authData(state = initialState, action) {
  switch (action.type) {
    case actions.SET_AUTHDATA:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
}
