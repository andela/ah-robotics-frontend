import {
  NEW_PASSWORD_START,
  NEW_PASSWORD_SUCCESS,
  NEW_PASSWORD_ERROR
} from '../../actions/newPasswordActions/types';
  
const initialState = {
  success: false,
  isResetting: false,
  message: '',
  errors: {}
};
  
const newPasswordReducer = (state = initialState, action) => {
  switch (action.type) {
  case NEW_PASSWORD_START: {
    return { ...state, isResetting: true };
  }
  case NEW_PASSWORD_SUCCESS: {
    return {
      ...action.payload,
      success: true,
      isResetting: false,
      message: 'success'
    };
  }
  case NEW_PASSWORD_ERROR: {
    return { ...action.payload, isResetting: false };
  }
  default:
    return state;
  }
};
  
export default newPasswordReducer;