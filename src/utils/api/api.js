import { get, post, del, put } from './baseAPI';

export const apiCall = async ({ requestType, ...props }) => {
  let response = {};

  switch (requestType) {
    case 'GET':
      response = await getApiCall({ requestType, ...props });
      break;
    case 'POST':
      response = await postApiCall({ requestType, ...props });
      break;
    case 'DELETE':
      response = await deleteApiCall({ requestType, ...props });
      break;
    case 'PUT':
      response = await putApiCall({ requestType, ...props });
      break;
    default:
      response = await getApiCall({ requestType, ...props });
  }

  return response;
};

const manageAPIResponse = async ({
  apiEndPoint,
  requestType,
  apiResponse,
  responseMapFunction,
  paramToPassInMapFunction,
  callback,
  ...props
}) => {
  let { currentRetry, retry } = props;
  if (apiResponse.success) {
    const resData = responseMapFunction
      ? paramToPassInMapFunction
        ? responseMapFunction(apiResponse.response, paramToPassInMapFunction)
        : responseMapFunction(apiResponse.response)
      : apiResponse.response;
    if (callback) {
      callback(resData, apiResponse, paramToPassInMapFunction);
    }
    return { ...apiResponse, response: resData };
  } else if (retry) {
    currentRetry = (currentRetry || 1) + 1;
    if (currentRetry <= retry) {
      props.currentRetry = currentRetry;
      props.retry = retry;
      return apiCall({ apiEndPoint, requestType, ...props });
    } else {
      return apiResponse;
    }
  } else {
    return apiResponse;
  }
};

export const getApiCall = ({ apiEndPoint, requestType, ...props }) => {
  return get({ path: apiEndPoint, ...props })
    .then(responseData => {
      let apiResponse = {};
      if (responseData.status === 200 || responseData.status === 201) {
        apiResponse = {
          success: true,
          response: responseData.data,
          isLoading: false,
        };
      } else {
        apiResponse = {
          success: false,
          error: {
            errorCode: responseData.status,
            message: responseData.data.apiError ? responseData.data.apiError.message : responseData.data.message,
            apiError: responseData.data.apiError ? responseData.data.apiError : responseData.data,
            isLoading: false,
          },
        };
      }
      return manageAPIResponse({
        apiResponse,
        apiEndPoint,
        requestType,
        ...props,
      });
    })
    .catch(e => {
      return {
        success: false,
        data: { errorCode: e.status, message: e.message, apiError: e },
      };
    });
};

export const postApiCall = async ({ apiEndPoint, apiPostData, requestType, ...props }) => {
  return post({ path: apiEndPoint, body: apiPostData, ...props })
    .then(responseData => {
      let apiResponse = {};
      if (responseData.status === 200 || responseData.status === 201) {
        apiResponse = {
          success: true,
          response: responseData.data,
          isLoading: false,
        };
      } else {
        apiResponse = {
          success: false,
          error: {
            errorCode: responseData.status,
            message: responseData.data.apiError ? responseData.data.apiError.message : responseData.data.message,
            apiError: responseData.data.apiError ? responseData.data.apiError : responseData.data,
            isLoading: false,
          },
        };
      }
      return manageAPIResponse({
        apiResponse,
        apiEndPoint,
        requestType,
        ...props,
      });
    })
    .catch(e => {
      return {
        success: false,
        data: { errorCode: e.status, message: e.message, apiError: e },
      };
    });
};

export const deleteApiCall = ({ apiEndPoint, requestType, ...props }) => {
  return del({ path: apiEndPoint, ...props })
    .then(responseData => {
      let apiResponse = {};
      if (responseData.status === 200 || responseData.status === 201) {
        apiResponse = {
          success: true,
          response: responseData.data,
          isLoading: false,
        };
      } else {
        apiResponse = {
          success: false,
          error: {
            errorCode: responseData.status,
            message: responseData.data.apiError ? responseData.data.apiError.message : responseData.data.message,
            apiError: responseData.data.apiError ? responseData.data.apiError : responseData.data,
            isLoading: false,
          },
        };
      }
      return manageAPIResponse({
        apiResponse,
        apiEndPoint,
        requestType,
        ...props,
      });
    })
    .catch(e => {
      return {
        success: false,
        data: { errorCode: e.status, message: e.message, apiError: e },
      };
    });
};

export const putApiCall = ({ apiEndPoint, apiPostData, requestType, ...props }) => {
  return put({ path: apiEndPoint, body: apiPostData, ...props })
    .then(responseData => {
      let apiResponse = {};
      if (responseData.status === 200 || responseData.status === 201) {
        apiResponse = {
          success: true,
          response: responseData.data,
          isLoading: false,
        };
      } else {
        apiResponse = {
          success: false,
          error: {
            errorCode: responseData.status,
            message: responseData.data.apiError ? responseData.data.apiError.message : responseData.data.message,
            apiError: responseData.data.apiError ? responseData.data.apiError : responseData.data,
            isLoading: false,
          },
        };
      }
      return manageAPIResponse({
        apiResponse,
        apiEndPoint,
        requestType,
        ...props,
      });
    })
    .catch(e => {
      return {
        success: false,
        data: { errorCode: e.status, message: e.message, apiError: e },
      };
    });
};
