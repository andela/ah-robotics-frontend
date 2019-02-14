import {
  VERIFY_START,
  VERIFY_ERROR,
<<<<<<< HEAD
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
=======
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
>>>>>>> feat(register): add email verification functionality
