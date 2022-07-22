import * as baseApi from '../baseAPI';

describe('base api test', () => {
  let baseURL, error;
  const unmockedFetch = global.fetch;
  beforeAll(() => {
    baseURL = 'testURL';
  });
  afterAll(() => {
    global.fetch = unmockedFetch;
  });
  // test('timeout setTimeout test', async () => {
  //   jest.useFakeTimers();
  //   const data = { message: 'Timeout Error' };
  //   global.fetch = () => Promise.reject(data);
  //   await baseApi.request({ path: `${baseURL}/products/1`, method: 'GET', body: null }).catch(e => {
  //     error = e;
  //   });
  //   expect(error.message).toBe('Timeout Error');
  //   expect.assertions(1);
  //   jest.runAllTimers();
  // });
  test('error handling', async () => {
    global.fetch = () =>
      Promise.resolve({
        status: 200,
        text: () => Promise.resolve({ data: '' }),
      });
    await baseApi.request({ path: `${baseURL}/products`, method: 'POST', body: '{"foo": 1.}' }).catch(e => {
      error = e;
    });
    expect(error.Error).toBe(undefined);
  });
  test('pass headers in request', async () => {
    const header = { 'Content-Type': 'application/json' };
    global.fetch = () =>
      Promise.resolve({
        status: 200,
        text: () => Promise.resolve(),
      });
    await baseApi.request({ path: `${baseURL}/products`, method: 'POST', header }).then(function (data) {
      expect(data.status).toBe(200);
    });
  });
});
