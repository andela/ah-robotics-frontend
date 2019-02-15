import {
  VERIFY_START,
  VERIFY_ERROR,
<<<<<<< HEAD
<<<<<<< HEAD
  VERIFY_SUCCESS,
=======
  VERIFY_SUCCESS
>>>>>>> feat(register): add email verification functionality
=======
  VERIFY_SUCCESS,
>>>>>>> feat(register): add more tests
} from '../../actions/VerifyRegistrationActions/types';

const initialState = {
  success: false,
  isVerifying: false,
<<<<<<< HEAD
<<<<<<< HEAD
  errors: {},
=======
  errors: {}
>>>>>>> feat(register): add email verification functionality
=======
  errors: {},
>>>>>>> feat(register): add more tests
};

const verifyReducer = (state = initialState, action) => {
  switch (action.type) {
<<<<<<< HEAD
<<<<<<< HEAD
  case VERIFY_START: {
=======
  case  VERIFY_START: {
>>>>>>> feat(register): add email verification functionality
=======
  case VERIFY_START: {
>>>>>>> feat(register): add more tests
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
