import {
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_ERROR
} from '../../actions/RegisterActions/types';

const initialState = {
  user: {},
  success: false,
  isRegistering: false
};

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
  case REGISTER_START: {
    return { ...state, isRegistering: true };
  }
  case REGISTER_SUCCESS: {
    return {
      ...state,
      ...action.payload,
      success: true,
      isRegistering: false
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
