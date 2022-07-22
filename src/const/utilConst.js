import { Dimensions } from 'react-native';

export const SCREEN_HEIGHT = Dimensions.get('window').height;
export const SCREEN_WIDTH = Dimensions.get('window').width;

export const ALERT_TOAST = 'toast';
export const ALERT_NATIVE = 'alert';
export const ALERT_TOAST_SUCCESS = 'success';
export const ALERT_TOAST_ERROR = 'error';
export const ALERT_TOAST_INFORMATION = 'information';
export const ALERT_TOAST_ALERT = 'alert';
export const ALERT_TOAST_OTP = 'otp';

export const API_PARAMS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
};

export const DATE_FORMATTER = {
  ddmmmyyyyHHMA: 'DD MMM YYYY, hh:mm A',
};
