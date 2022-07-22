import TestReducer, { decrement, DECREMENT, increment, INCREMENT } from '../test';
describe('test reducer', () => {
  it('should return the initial state', () => {
    expect(TestReducer(undefined, {})).toEqual({ count: 0 });
  });
  it('should return increment counter', () => {
    expect(TestReducer({ count: 0 }, { type: INCREMENT })).toEqual({
      count: 1,
    });
  });
  it('should return decrement counter', () => {
    expect(TestReducer({ count: 1 }, { type: DECREMENT })).toEqual({
      count: 0,
    });
  });
  it('test increment dispatch', () => {
    const dispatch = jest.fn();
    increment()(dispatch);
    expect(dispatch).toHaveBeenCalledWith({ type: INCREMENT });
  });
  it('test decrement dispatch', () => {
    const dispatch = jest.fn();
    decrement()(dispatch);
    expect(dispatch).toHaveBeenCalledWith({ type: DECREMENT });
  });
});
