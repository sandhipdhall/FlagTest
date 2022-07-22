import * as api from '../api';

describe('api.js file test', () => {
  let baseURL;
  const unmockedFetch = global.fetch;
  beforeAll(() => {
    baseURL = 'testURL';
  });
  afterAll(() => {
    global.fetch = unmockedFetch;
  });
  test('fetch put/delete/default api call for status 200', async () => {
    global.fetch = () =>
      Promise.resolve({
        status: 200,
        text: () => Promise.resolve(),
      });
    await api.apiCall({ apiEndPoint: `${baseURL}/products`, requestType: 'PUT' }).then(function (res) {
      expect(res.success).toBe(true);
    });

    await api.apiCall({ apiEndPoint: `${baseURL}/products/1`, requestType: 'DELETE' }).then(function (res) {
      expect(res.success).toBe(true);
    });

    await api.apiCall({ apiEndPoint: `${baseURL}/products`, requestType: 'PATCH' }).then(function (res) {
      expect(res.success).toBe(true);
    });
  });

  test('fetch put/delete/post/get api call for status 201', async () => {
    global.fetch = () =>
      Promise.resolve({
        status: 201,
        text: () => Promise.resolve(),
      });
    await api.apiCall({ apiEndPoint: `${baseURL}/products`, requestType: 'PUT' }).then(function (res) {
      expect(res.success).toBe(true);
    });
    await api.apiCall({ apiEndPoint: `${baseURL}/products/1`, requestType: 'DELETE', callback: jest.fn() }).then(function (res) {
      expect(res.success).toBe(true);
    });
    await api
      .apiCall({ apiEndPoint: `${baseURL}/products`, requestType: 'POST', apiPostData: null, responseMapFunction: jest.fn() })
      .then(function (res) {
        expect(res.success).toBe(true);
      });
    await api
      .apiCall({
        apiEndPoint: `${baseURL}/products`,
        requestType: 'GET',
        responseMapFunction: jest.fn(),
        paramToPassInMapFunction: { apiEndPoint: `${baseURL}/products/1`, requestType: 'GET' },
      })
      .then(function (res) {
        expect(res.success).toBe(true);
      });
  });

  test('fetch put/delete/post/get api call for else part having data', async () => {
    const data = JSON.stringify({
      apiError: {
        message: '403 Error',
      },
    });
    global.fetch = () =>
      Promise.resolve({
        status: 403,
        text: () => Promise.resolve(data),
      });
    await api.apiCall({ apiEndPoint: `${baseURL}/products`, requestType: 'PUT' }).then(function (res) {
      expect(res.success).toBe(false);
    });
    await api.apiCall({ apiEndPoint: `${baseURL}/products/1`, requestType: 'DELETE' }).then(function (res) {
      expect(res.success).toBe(false);
    });
    await api.apiCall({ apiEndPoint: `${baseURL}/products`, requestType: 'POST', apiPostData: null }).then(function (res) {
      expect(res.success).toBe(false);
    });
    await api.apiCall({ apiEndPoint: `${baseURL}/products`, requestType: 'GET', retry: 3 }).then(function (res) {
      expect(res.success).toBe(false);
    });
  });

  test('fetch put/delete/post/get api call for else part without data', async () => {
    const data = JSON.stringify({
      data: {
        apiError: {
          message: '403 Error',
        },
      },
    });
    global.fetch = () =>
      Promise.resolve({
        status: 403,
        text: () => Promise.resolve(data),
      });
    await api.apiCall({ apiEndPoint: `${baseURL}/products`, requestType: 'PUT' }).then(function (res) {
      expect(res.success).toBe(false);
    });
    await api.apiCall({ apiEndPoint: `${baseURL}/products/1`, requestType: 'DELETE' }).then(function (res) {
      expect(res.success).toBe(false);
    });
    await api.apiCall({ apiEndPoint: `${baseURL}/products`, requestType: 'POST', apiPostData: null }).then(function (res) {
      expect(res.success).toBe(false);
    });
    await api.apiCall({ apiEndPoint: `${baseURL}/products`, requestType: 'GET' }).then(function (res) {
      expect(res.success).toBe(false);
    });
  });

  test('fetch put/delete/post api call for catch part', async () => {
    const data = { status: 403, message: 'Error' };
    global.fetch = () => Promise.reject(data);
    await api.apiCall({ apiEndPoint: `${baseURL}/products`, requestType: 'PUT' }).then(function (res) {
      expect(res.success).toBe(false);
    });

    await api.apiCall({ apiEndPoint: `${baseURL}/products/1`, requestType: 'DELETE' }).then(function (res) {
      expect(res.success).toBe(false);
    });

    await api.apiCall({ apiEndPoint: `${baseURL}/products`, requestType: 'POST', apiPostData: null }).then(function (res) {
      expect(res.success).toBe(false);
    });

    await api.apiCall({ apiEndPoint: `${baseURL}/products`, requestType: 'GET' }).then(function (res) {
      expect(res.success).toBe(false);
    });
  });
});
