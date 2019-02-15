import {
  REGISTER_START,
  REGISTER_ERROR,
  REGISTER_SUCCESS,
} from './types';

export const registerUser = payload => ({
    type: REGISTER_START,
    payload,
  });

export const registerSuccess = payload => ({
    type: REGISTER_SUCCESS,
    payload,
  });

export const registerFail = payload => ({
    type: REGISTER_ERROR,
    payload,
  });
