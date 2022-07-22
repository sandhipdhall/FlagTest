import * as redux from '../reduxApi';

describe('test reduxApi', () => {
  let baseURL;
  const unmockedFetch = global.fetch;
  beforeAll(() => {
    baseURL = process.env.REACT_APP_API_END_POINT;
  });
  afterAll(() => {
    global.fetch = unmockedFetch;
  });
  test('api call with redux test', async () => {
    global.fetch = () =>
      Promise.resolve({
        status: 200,
        text: () => Promise.resolve(),
      });
    await redux
      .apiCallWithRedux({ apiEndPoint: `${baseURL}/products`, requestType: 'GET', reducerName: 'apiReducer' })
      .then(function (data) {
        expect(data.success).toBe(true);
      });
  });

  test('api call with redux test with different reducer', async () => {
    global.fetch = () =>
      Promise.resolve({
        status: 200,
        text: () => Promise.resolve(),
      });
    await redux
      .apiCallWithRedux({ apiEndPoint: `${baseURL}/products`, requestType: 'GET', reducerName: 'apiReducer' })
      .then(function (data) {
        expect(data.success).toBe(true);
      });
  });
});
