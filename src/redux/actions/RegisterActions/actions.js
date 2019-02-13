import {
  REGISTER_START,
  REGISTER_ERROR,
  REGISTER_SUCCESS
} from './types';

export const registerUser = (payload) => {
  return {
    type: REGISTER_START,
    payload: payload
  };
};

export const registerSuccess = (payload) => {
  return {
    type: REGISTER_SUCCESS,
    payload: payload
  };
};

export const registerFail = (payload) => {
  return {
    type: REGISTER_ERROR,
    payload: payload
  };
};

