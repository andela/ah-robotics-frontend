import * as types from './types';

  export function FacebookAuth(data) {
    return data;
  }
  export function GoogleAuth(data) {
    return data;
  }
  export function TwitterAuth(data) {
    return data;
  }

  export function loginStart(payload) {
    return {
      type: types.SOCIAL_LOGIN_START,
      payload,
    };
  }
  export function loginSuccess(payload) {
    return {
      type: types.SOCIAL_LOGIN_SUCCESS,
      payload,
    };
  }
  export function loginError(payload) {
    return {
      type: types.SOCIAL_LOGIN_ERROR,
      payload,
    };
  }
