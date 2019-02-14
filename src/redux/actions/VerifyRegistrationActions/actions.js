import {
  VERIFY_START,
  VERIFY_ERROR,
  VERIFY_SUCCESS
} from './types';

export const verifyUser = (payload) => {
  return {
    type: VERIFY_START,
    payload: payload
  };
};

export const verifySuccess = (payload) => {
  return {
    type: VERIFY_SUCCESS,
    payload: payload
  };
};

export const verifyFail = (payload) => {
  return {
    type: VERIFY_ERROR,
    payload: payload
  };
};
