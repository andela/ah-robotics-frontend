import userFollowReducer from './userFollowReducer';
import {
    PROFILE_FOLLOW_DATA,
    PROFILE_FOLLOW_DATA_SUCCESS,
    PROFILE_FOLLOWERS_START,
    PROFILE_FOLLOWERS_ERROR,
    PROFILE_FOLLOWERS_SUCCESS,
    PROFILE_FOLLOWING_START,
    PROFILE_FOLLOWING_ERROR,
    PROFILE_FOLLOWING_SUCCESS,
    PROFILE_DELETE_START,
    PROFILE_DELETE_SUCCESS,
    PROFILE_DELETE_ERROR,
} from '../../actions/userFollowActions/types';


describe('userFollowReducer tests', () => {
  it('it should have an initial state', () => {
    expect(userFollowReducer(userFollowReducer.initialState, {})).toEqual({
    profileFollowData: {}, error: {}, profileFollowersUpdate: false, isLoading: false, Following: 0,
    Followers: 0,
});
  });
  it('it should show isloading set false', () => {
    expect(userFollowReducer(null, {
      type: PROFILE_FOLLOW_DATA,
      payload: {},
    })).toEqual({ isLoading: false });
  });
  it('it should show isloading is set false', () => {
    expect(userFollowReducer(null, {
      type: PROFILE_FOLLOW_DATA_SUCCESS,
      payload: {},
    })).toEqual({ isLoading: false });
  });
  it('it should show error on submit', () => {
    expect(userFollowReducer(null, {
      type: PROFILE_FOLLOWERS_ERROR,
      payload: {},
    })).toEqual({ isLoading: true, errors: {} });
  });
  it('it should show isloading true', () => {
    expect(userFollowReducer(null, {
      type: PROFILE_FOLLOWERS_START,
      payload: {},
    })).toEqual({ isLoading: true, profileFollowData: {} });
  });
  it('it should show on update isloading false', () => {
    expect(userFollowReducer(null, {
      type: PROFILE_FOLLOWERS_SUCCESS,
      payload: {},
    })).toEqual({ isLoading: false });
  });
  it('it should show isloading true', () => {
    expect(userFollowReducer(null, {
      type: PROFILE_FOLLOWING_START,
      payload: {},
    })).toEqual({ isLoading: true, profileFollowData: {} });
  });
  it('it should show isloading treu on submit', () => {
    expect(userFollowReducer(null, {
      type: PROFILE_FOLLOWING_ERROR,
      payload: {},
    })).toEqual({ isLoading: true, errors: {} });
  });
  it('it should show on update isloading false', () => {
    expect(userFollowReducer(null, {
      type: PROFILE_FOLLOWING_SUCCESS,
      payload: {},
    })).toEqual({ isLoading: false });
  });
});
