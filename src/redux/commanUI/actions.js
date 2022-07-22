export const OPEN_DIALOG = 'commanUI/OPEN_DIALOG';
export const CLOSE_DIALOG = 'commanUI/CLOSE_DIALOG';

export const SHOW_LOADER = 'commanUI/SHOW_LOADER';
export const HIDE_LOADER = 'commanUI/HIDE_LOADER';

export const SHOW_LOGIN_POPUP = 'commanUI/SHOW_LOGIN_POPUP';
export const HIDE_LOGIN_POPUP = 'commanUI/HIDE_LOGIN_POPUP';

export const openDialog = data => {
  return dispatch => {
    dispatch({
      type: OPEN_DIALOG,
      payload: data,
    });
  };
};

export const closeDialog = data => {
  return dispatch => {
    dispatch({
      type: CLOSE_DIALOG,
    });
  };
};
export const showLoader = data => {
  return dispatch => {
    dispatch({
      type: SHOW_LOADER,
    });
  };
};
export const hideLoader = data => {
  return dispatch => {
    dispatch({
      type: HIDE_LOADER,
    });
  };
};

export const showLoginDialog = data => {
  return dispatch => {
    dispatch({
      type: SHOW_LOGIN_POPUP,
    });
  };
};
export const hideLoginDialog = data => {
  return dispatch => {
    dispatch({
      type: HIDE_LOGIN_POPUP,
    });
  };
};
