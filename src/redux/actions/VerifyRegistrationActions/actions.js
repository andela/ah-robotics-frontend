import {
  VERIFY_START,
  VERIFY_ERROR,
  VERIFY_SUCCESS,
} from './types';

export const verifyUser = payload => ({
    type: VERIFY_START,
    payload,
  });

export const verifySuccess = payload => ({
    type: VERIFY_SUCCESS,
    payload,
  });

export const verifyFail = payload => ({
    type: VERIFY_ERROR,
    payload,
  });
