# Utils

**utils** folder is a place where you can place small snippets you can use throughout the application.

## Files

Files inside utils folder contains javascript functions which can be used anywhere in the entire project.

Mainly, this files are used for API calls.

### api.js
Below are some functions inside **api.js** file

**apiCall** function which accepts requestType as an argument and returns another functions based on the argument.
**getAPiCall** function which accepts requestType as 'GET' and some props like apiEndPoint(your Base API url) and returns response.
**postApiCall** function which accepts requestType as 'POST' and some props like apiEndPoint(your Base API url), apiPostData(data which you want to post) and returns response.
**deleteAPiCall** function which accepts requestType as 'DELETE' and some props like apiEndPoint(your Base API url) and returns response.

### baseApi.js
**request** function accepts method('GET', 'POST', 'DELETE', 'PUT')(As per users need) and this arguments are than passed to **sendRequest** function which return the response and this response is than passed to **handleResponse** function which will finally return the actual response.

### reduxApi.js
This file contains a reducer and **apiCallWithRedux** functions which has reducerName as an argument. This function can be used for calling APi with dynamic redux.

### useHookAPIWrapper.js
This is custom Hook which is used to retrieve single element from arrays of objects. It has apiEndPoint(your Base API Url), data, requestType etc as an arguments and returns single response.

### reportWebVitals.js
It measures a set of metrics that aim to capture the user experience of a web page. With the **reportWebVitals** function, you can send any of results to an analytics endpoint to measure and track real user performance on your site.

## For Example:

#### You can call API as below:

const  baseURL = process.env.REACT_APP_API_END_POINT;

const  apiResponse = await  apiCall({
apiEndPoint:  `${baseURL}/products`,
requestType:  'POST',
apiPostData:  this.state.productValues
});
You can check the data inside apiResponse.

### Use apiCallWithRedux

const  baseURL = process.env.REACT_APP_API_END_POINT;

apiCallWithRedux({
reducerName:  'ProductDataAPI',
apiEndPoint:  `${baseURL}/products`,
requestType:  'GET',
header: { Accept:  'application/xml', 'Content-Type':  'application/xml' }
});

