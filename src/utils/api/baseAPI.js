import Promise from 'bluebird';
// import JwtDecode from 'jwt-decode';

// There is lots of Data in some API so we need to add more timeout here
 const TIMEOUT = 60000;

/**
 * GET a path relative to API root url.
 * @param {String}  path Relative path to the configured API endpoint
 * @returns {Promise} of response body
 */
export async function get({ path, ...props }) {
  return bodyOf(request({ method: 'get', path, body: null, ...props }));
}

// /**
//  * POST JSON to a path relative to API root url
//  * @param {String} path Relative path to the configured API endpoint
//  * @param {Object} body Anything that you can pass to JSON.stringify
//  * @returns {Promise}  of response body
//  */
// export async function post({ path, body, ...props }) {
//   return bodyOf(request({ method: 'post', path, body, ...props }));
// }

// /**
//  * PUT JSON to a path relative to API root url
//  * @param {String} path Relative path to the configured API endpoint
//  * @param {Object} body Anything that you can pass to JSON.stringify
//  * @returns {Promise}  of response body
//  */
// export async function put({ path, body, ...props }) {
//   return bodyOf(request({ method: 'put', path, body, ...props }));
// }

// /**
//  * DELETE a path relative to API root url
//  * @param {String} path Relative path to the configured API endpoint
//  * @returns {Promise}  of response body
//  */
// export async function del({ path, ...props }) {
//   return bodyOf(request({ method: 'delete', path, body: null, ...props }));
// }

// /**
//  * Make arbitrary fetch request to a path relative to API root url
//  * @param {String} method One of: get|post|put|delete
//  * @param {String} path Relative path to the configured API endpoint
//  * @param {Object} body Anything that you can pass to JSON.stringify
//  */
export async function request({ method, path, body, ...props }) {
  try {
    const response = await sendRequest({ method, path, body, ...props });
    return handleResponse(path, response);
  } catch (error) {
    const err = error;
    throw err;
  }
}

// /**
//  * Takes a relative path and makes it a full URL to API server
//  */
export function url(path) {
  return path;
}

// /**
//  * Constructs and fires a HTTP request
//  */
async function sendRequest({ method, path, body, ...props }) {
  try {
    const endpoint = url(path);
    const headers = props.header ? props.header : getRequestHeaders(body, props?.token);
    const options = body ? { method, headers, body: JSON.stringify(body) } : { method, headers };

    return timeout(fetch(endpoint, options), TIMEOUT);
  } catch (e) {
    const error = e;
    throw new Error(error);
  }
}

// /**
//  * Receives and reads a HTTP response
//  */
async function handleResponse(_path, response) {
  try {
    const responseBody = await response.text();
    const responseBodyJson = {};
    responseBodyJson.status = response.status;
    try {
      responseBodyJson.data = responseBody ? JSON.parse(responseBody) : null;
    } catch (e) {
      const error = e;
      throw error;
    }
    return {
      status: response.status,
      headers: response.headers,
      body: responseBodyJson || null,
    };
  } catch (e) {
    const error = e;
    throw error;
  }
}

// export function checkTokenValidity(accessToken) {
//   const decodedAccessTokenData = JwtDecode(accessToken);
//   const tokenExpiryTimeStamp = decodedAccessTokenData.exp;
//   const currentTimeStamp = Math.floor(new Date() / 1000);
//   return tokenExpiryTimeStamp > currentTimeStamp;
// }

function getRequestHeaders(body, token) {
  let headers = body ? { Accept: 'application/json', 'Content-Type': 'application/json' } : { Accept: 'application/json' };
  if (token) {
    const isTokenValid = checkTokenValidity(token);
    if (isTokenValid === false) {
      //handle token expire
    } else {
      headers = {
        ...headers,
        authtoken: token ? token : null,
      };
    }
  }

  return headers;
}

// /**
//  * Rejects a promise after `ms` number of milliseconds, it is still pending
//  */
function timeout(promise, ms) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error('timeout')), ms);
    promise
      .then(response => {
        clearTimeout(timer);
        resolve(response);
      })
      .catch(reject);
  });
}

async function bodyOf(requestPromise) {
  try {
    const response = await requestPromise;
    return response.body;
  } catch (e) {
    const error = e;
    throw error;
  }
}
