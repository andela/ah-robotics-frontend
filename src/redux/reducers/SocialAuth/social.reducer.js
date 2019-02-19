import {
  SOCIAL_LOGIN_ERROR,
  SOCIAL_LOGIN_START,
  SOCIAL_LOGIN_SUCCESS,
  } from '../../actions/socialAuth/types';

export const initialState = {
  isLoading: false,
  error: false,
};

const SocialAuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case SOCIAL_LOGIN_START:
      return {
        ...state,
        ...action.payload,
        isLoading: true,
        message: 'fetching user details',
        error: false,
      };
    case SOCIAL_LOGIN_SUCCESS:
      return {
        ...state,
        ...action.payload,
        message: 'success',
        isLoading: false,
        error: false,
        errors: {},
      };
    case SOCIAL_LOGIN_ERROR:
      return {
        ...action.payload,
        message: 'failed',
        isLoading: false,
        error: true,
      };

    default:
      return state;
  }
};

export default SocialAuthReducer;
