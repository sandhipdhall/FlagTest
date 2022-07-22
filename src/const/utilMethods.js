
import { OPEN_DIALOG } from '../redux/commanUI/actions';
import store from '../redux/store';
import { ALERT_TOAST, ALERT_TOAST_ERROR, ALERT_TOAST_SUCCESS } from './utilConst';

export function handleSuccess(message, messageType) {
  store.dispatch({
    type: OPEN_DIALOG,
    payload: {
      type: ALERT_TOAST,
      messageType: messageType ?? ALERT_TOAST_SUCCESS,
      message: message,
    },
  });
}

export function handleError(error, messageType) {
  store.dispatch({
    type: OPEN_DIALOG,
    payload: {
      type: ALERT_TOAST,
      messageType: messageType ?? ALERT_TOAST_ERROR,
      message: handleErrorMessage(error),
    },
  });
}