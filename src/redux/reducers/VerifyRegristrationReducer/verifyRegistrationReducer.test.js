import reducer from './verifyRegistrationReducer';
import * as types from '../../actions/VerifyRegistrationActions/types';

const user = {
  email: 'tester123@gmail.com',
  username: 'tester123',
  password: 'tester@123',
};

describe('verify reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {}))
      .toEqual({
        errors: {},
        isVerifying: false,
        success: false,
      });
  });

  it('should handle VERIFY_START', () => {
    expect(
      reducer([], { type: types.VERIFY_START, payload: user }),
    ).toEqual({
      isVerifying: true,
    });
  });

  it('should handle VERIFY_SUCCESS', () => {
    expect(
      reducer([], { type: types.VERIFY_SUCCESS, payload: user }),
    ).toEqual({
      email: 'tester123@gmail.com',
      isVerifying: false,
      password: 'tester@123',
      success: true,
      username: 'tester123',
    });
  });

  it('should handle VERIFY_FAIL', () => {
    expect(
      reducer([], { type: types.VERIFY_ERROR, payload: user }),
    ).toEqual({
      email: 'tester123@gmail.com',
      isVerifying: false,
      password: 'tester@123',
      username: 'tester123',
    });
  });
});
