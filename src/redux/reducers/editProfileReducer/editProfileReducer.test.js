import editProfileReducer from './editProfileReducer';
import {
    PROFILE_PATCH_START,
    PROFILE_PATCH_SUCCESS,
    PROFILE_PATCH_ERROR,
  } from '../../actions/userProfileActions/types';

describe('editProfileReducer tests', () => {
  it('it should have an initial state', () => {
    expect(editProfileReducer(editProfileReducer.initialState, {})).toEqual({
        profileData: {},
        error: {},
        profileUpdate: false,
        isLoading: false,
        Followers: 0,
        Following: 0,
});
  });
  it('it should show error on profile submit', () => {
    expect(editProfileReducer(null, {
      type: PROFILE_PATCH_START,
      payload: {},
    })).toEqual({ isLoading: true, profileData: {} });
  });
  it('it should show error on profile submit', () => {
    expect(editProfileReducer(null, {
      type: PROFILE_PATCH_SUCCESS,
      payload: {},
    })).toEqual({ isLoading: false });
  });
  it('it should show error on profile submit', () => {
    expect(editProfileReducer(null, {
      type: PROFILE_PATCH_ERROR,
      payload: {},
    })).toEqual({ isLoading: true, errors: {} });
  });
});
