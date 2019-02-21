import {
  RESET_PASSWORD_START,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_ERROR,
} from './resetPasswordTypes';

export const resetPasswordUser = payload => ({
    type: RESET_PASSWORD_START,
    payload,
  });

export const resetPasswordSuccess = payload => ({
    type: RESET_PASSWORD_SUCCESS,
    payload,
  });

export const resetPasswordFail = payload => ({
    type: RESET_PASSWORD_ERROR,
    payload,
  });
