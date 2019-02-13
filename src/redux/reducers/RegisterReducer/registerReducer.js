import {
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_ERROR
} from '../../actions/RegisterActions/types';

const initialState = {
  user: {},
  success: false,
<<<<<<< HEAD
  isRegistering: false
=======
  isRegistering: false,
  message: '',
  errors: {}
>>>>>>> feat(userRegistration): add registration functionality
};

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
  case REGISTER_START: {
    return { ...state, isRegistering: true };
  }
  case REGISTER_SUCCESS: {
    return {
<<<<<<< HEAD
      ...state,
      ...action.payload,
      success: true,
      isRegistering: false
=======
      ...action.payload,
      success: true,
      isRegistering: false,
      message: 'success'
>>>>>>> feat(userRegistration): add registration functionality
    };
  }
  case REGISTER_ERROR: {
    return { ...action.payload, isRegistering: false };
  }
  default:
    return state;
  }
};

export default registerReducer;
