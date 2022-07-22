import * as actions from './actions';

const initialState = {
  isVisible: false,
  isLoading: false,
  dialogData: {},
  loginDialog: false,
};

export default function commonUIReducer(state = initialState, action) {
  switch (action.type) {
    case actions.OPEN_DIALOG:
      return {
        ...state,
        isVisible: true,
        dialogData: action.payload,
      };
    case actions.CLOSE_DIALOG:
      return {
        ...state,
        isVisible: false,
        dialogData: {},
      };
    case actions.SHOW_LOADER:
      return {
        ...state,
        isLoading: true,
      };
    case actions.HIDE_LOADER:
      return {
        ...state,
        isLoading: false,
      };
    case actions.SHOW_LOGIN_POPUP:
      return {
        ...state,
        loginDialog: true,
      };
    case actions.HIDE_LOGIN_POPUP:
      return {
        ...state,
        loginDialog: false,
      };
    default:
      return state;
  }
}
