import {
  PROFILE_ERROR,
  PROFILE_PATCH_START,
  PROFILE_PATCH_SUCCESS,
  PROFILE_PATCH_ERROR,
  PROFILE_DATA,
  PROFILE_DATA_SUCCESS,
} from '../../actions/userProfileActions/types';

const initialState = {
  profileData: {},
  error: {},
  profileUpdate: false,
  isLoading: false,
  Followers: 0,
  Following: 0,
};

const userProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROFILE_DATA: {
      return { ...action.payload, isLoading: false };
    }
    case PROFILE_DATA_SUCCESS: {
      return { ...action.payload, isLoading: false };
    }
    case PROFILE_ERROR: {
      return { ...state, isLoading: true, errors: {} };
    }
    case PROFILE_PATCH_START: {
      return { ...state, profileData: action.payload, isLoading: true };
    }
    case PROFILE_PATCH_SUCCESS: {
      return { ...action.payload, isLoading: false };
    }
    case PROFILE_PATCH_ERROR: {
      return { ...state, isLoading: true, errors: {} };
    }
        default:
      return state;
  }
};

export default userProfileReducer;
