import {
  NEW_PASSWORD_START,
  NEW_PASSWORD_SUCCESS,
  NEW_PASSWORD_ERROR,
} from '../../actions/newPasswordActions/types';

export const initialState = {
  success: false,
  isResetting: false,
  message: '',
  errors: {},
};

const newPasswordReducer = (state = initialState, action) => {
  switch (action.type) {
  case NEW_PASSWORD_START: {
    return { ...state, isResetting: true, success: false };
  }
  case NEW_PASSWORD_SUCCESS: {
    return {
      ...action.payload,
      success: true,
      isResetting: false,
    };
  }
  case NEW_PASSWORD_ERROR: {
    return { ...action.payload, isResetting: false, message: 'fail' };
  }
  default:
    return state;
  }
};

export default newPasswordReducer;
