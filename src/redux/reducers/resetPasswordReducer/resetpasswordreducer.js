import {
  RESET_PASSWORD_START,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_ERROR,
} from '../../actions/resetPasswordActions/resetPasswordTypes';

export const initialState = {
  email: '',
  errors: {},
  success: false,
  message: {},
};

const resetPasswordReducer = (state = initialState, action) => {
  switch (action.type) {
  case RESET_PASSWORD_START: {
    return {
 ...state, isReseting: true, errors: {}, success: false,
};
  }
  case RESET_PASSWORD_SUCCESS: {
    return { ...action.payload, success: true, isReseting: false };
  }
  case RESET_PASSWORD_ERROR: {
    return { ...action.payload, isReseting: false, success: false };
  }
  default:
    return state;
  }
};

export default resetPasswordReducer;
