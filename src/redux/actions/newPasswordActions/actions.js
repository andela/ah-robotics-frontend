import {
  NEW_PASSWORD_START,
  NEW_PASSWORD_ERROR,
  NEW_PASSWORD_SUCCESS
} from './types';
  
export const newPasswordStart = (payload) => {
  return {
    type: NEW_PASSWORD_START,
    payload: payload
  };
};
  
export const newPasswordSuccess = (payload) => {
  return {
    type: NEW_PASSWORD_SUCCESS,
    payload: payload
  };
};
  
export const newPasswordFail = (payload) => {
  return {
    type: NEW_PASSWORD_ERROR,
    payload: payload
  };
};
  