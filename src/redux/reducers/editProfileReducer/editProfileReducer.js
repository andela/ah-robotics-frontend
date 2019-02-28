import {
  PROFILE_PATCH_START,
  PROFILE_PATCH_SUCCESS,
  PROFILE_PATCH_ERROR,
} from '../../actions/userProfileActions/types';

const initialState = {
  profileData: {},
  error: {},
  profileUpdate: false,
  isLoading: false,
  Followers: 0,
  Following: 0,
};

const editProfileReducer = (state = initialState, action) => {
  switch (action.type) {
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

export default editProfileReducer;
