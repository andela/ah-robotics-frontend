import {
  VERIFY_START,
  VERIFY_ERROR,
  VERIFY_SUCCESS,
} from '../../actions/VerifyRegistrationActions/types';

const initialState = {
  success: false,
  isVerifying: false,
  errors: {},
};

const verifyReducer = (state = initialState, action) => {
  switch (action.type) {
  case VERIFY_START: {
    return { ...state, isVerifying: true };
  }
  case VERIFY_SUCCESS: {
    return {
      ...action.payload,
      success: true,
      isVerifying: false,
    };
  }
  case VERIFY_ERROR: {
    return { ...action.payload, isVerifying: false };
  }
  default:
    return state;
  }
};

export default verifyReducer;
