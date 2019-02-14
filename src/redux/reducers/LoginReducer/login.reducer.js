import {
  LOGIN_USER,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
} from '../../actions/LoginActions/types';

export const initialState = {
  user: {},
  errors: {},
  success: false,
  isLoading: false,
  isAuthenticated: false,
  isError: false,

};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER: {
      return {
 ...state, isLoading: true, errors: {}, isAuthenticated: false,
};
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
...action.payload,
isLoading: false,
errors: {},
        success: true,
isAuthenticated: true,
      };
    }
    case LOGIN_ERROR: {
      return {
        ...initialState, ...action.payload, isLoading: false, isAuthenticated: false, isError: true,
      };
    }
    default:
      return state;
  }
};
export default loginReducer;
