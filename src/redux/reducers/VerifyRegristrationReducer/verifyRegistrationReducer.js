import {
  VERIFY_START,
  VERIFY_ERROR,
<<<<<<< HEAD
  VERIFY_SUCCESS,
=======
  VERIFY_SUCCESS
>>>>>>> feat(register): add email verification functionality
} from '../../actions/VerifyRegistrationActions/types';

const initialState = {
  success: false,
  isVerifying: false,
<<<<<<< HEAD
  errors: {},
=======
  errors: {}
>>>>>>> feat(register): add email verification functionality
};

const verifyReducer = (state = initialState, action) => {
  switch (action.type) {
<<<<<<< HEAD
  case VERIFY_START: {
=======
  case  VERIFY_START: {
>>>>>>> feat(register): add email verification functionality
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
