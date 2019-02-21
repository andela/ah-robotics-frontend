import {
  NEW_PASSWORD_START,
  NEW_PASSWORD_ERROR,
  NEW_PASSWORD_SUCCESS,
} from './types';

export const newPasswordStart = payload => ({
    type: NEW_PASSWORD_START,
    payload,
  });

export const newPasswordSuccess = payload => ({
    type: NEW_PASSWORD_SUCCESS,
    payload,
  });

export const newPasswordFail = payload => ({
    type: NEW_PASSWORD_ERROR,
    payload,
  });
