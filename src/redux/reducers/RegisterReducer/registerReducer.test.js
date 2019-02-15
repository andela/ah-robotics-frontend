import reducer from './registerReducer';
import * as types from '../../actions/RegisterActions/types';

const user = {
  email: 'tester123@gmail.com',
  username: 'tester123',
  password: 'tester@123',
};

describe('register reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {}))
      .toEqual({
        user: {},
        success: false,
        isRegistering: false,
        message: '',
        errors: {},
      });
  });

  it('should handle REGISTER_START', () => {
    expect(
      reducer([], { type: types.REGISTER_START, payload: user }),
    ).toEqual({
      isRegistering: true,
    });
  });

  it('should handle REGISTER_SUCCESS', () => {
    expect(
      reducer([], { type: types.REGISTER_SUCCESS, payload: user }),
    ).toEqual({
      email: 'tester123@gmail.com',
      isRegistering: false,
      message: 'success',
      password: 'tester@123',
      success: true,
      username: 'tester123',
    });
  });

  it('should handle REGISTER_ERROR', () => {
    expect(
      reducer([], { type: types.REGISTER_ERROR, payload: user }),
    ).toEqual({
      email: 'tester123@gmail.com',
      isRegistering: false,
      password: 'tester@123',
      username: 'tester123',
    });
  });
});
