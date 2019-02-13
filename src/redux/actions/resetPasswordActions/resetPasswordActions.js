import {
  RESET_PASSWORD_START,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_ERROR
} from '../../actions/resetPasswordActions/resetPasswordTypes';

export const resetPasswordUser = (payload) => {
  return {
    type: RESET_PASSWORD_START,
    payload
  }
};

export const resetPasswordSuccess = (payload) => {
  return {
    type: RESET_PASSWORD_SUCCESS,
    payload,
  }
};

export const resetPasswordFail = payload => {
  // console.log(payload)
  return {
    type: RESET_PASSWORD_ERROR,
    payload,
  }
};