import loginReducer, { initialState } from './loginReducer';
import { LOGIN_ERROR, LOGIN_SUCCESS, LOGIN_USER } from '../../actions/LoginActions/types';

describe('Login reducer tests', () => {
  it('it should have an initial state', () => {
    expect(loginReducer(initialState, {})).toEqual(initialState);
  });
  it('it should show is loading on login submit', () => {
    expect(loginReducer(null, {
      type: LOGIN_USER,
      payload: {},
    }).isLoading).toEqual(true);
  });
  it('it should set isAuthenticated to true on login success', () => {
    expect(loginReducer(null, {
      type: LOGIN_SUCCESS,
      payload: {},
    }).isAuthenticated).toEqual(true);
  });
  it('it should set isAuthenticated to false on login error', () => {
    expect(loginReducer(null, {
      type: LOGIN_ERROR,
      payload: {},
    }).isAuthenticated).toEqual(false);
  });
});
