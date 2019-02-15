import { LOGIN_USER, LOGIN_SUCCESS, LOGIN_ERROR } from './types';
import { loginError, loginSuccess, loginUser } from './actions';

describe('Login action creator', () => {
  it('should dispatch LOGIN_USER', () => {
    expect(loginUser({}).type).toEqual(LOGIN_USER);
  });
  it('should dispatch LOGIN_ERROR', () => {
    expect(loginError({}).type).toEqual(LOGIN_ERROR);
  });
  it('should dispatch LOGIN_SUCCESS', () => {
    expect(loginSuccess({}).type).toEqual(LOGIN_SUCCESS);
  });
});
