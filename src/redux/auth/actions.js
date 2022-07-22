export const SET_AUTHDATA = 'authData/SET_AUTHDATA';

export const setAuthData = data => {
  return dispatch => {
    dispatch({
      type: SET_AUTHDATA,
      payload: data,
    });
  };
};
