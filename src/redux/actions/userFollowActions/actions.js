import {
    PROFILE_FOLLOW_DATA,
    PROFILE_FOLLOW_ERROR,
    PROFILE_FOLLOWERS_START,
    PROFILE_FOLLOWERS_ERROR,
    PROFILE_FOLLOWERS_SUCCESS,
    PROFILE_FOLLOWING_START,
    PROFILE_FOLLOWING_ERROR,
    PROFILE_FOLLOWING_SUCCESS,
    PROFILE_FOLLOW_POST_START,
    PROFILE_FOLLOW_POST_ERROR,
    PROFILE_FOLLOW_POST_SUCCESS,
    USER_UNFOLLOW_SUCCESS,
    USER_UNFOLLOW_ERROR,
    USER_UNFOLLOW_START,
  } from './types';


export const profileFollowData = payload => ({
    type: PROFILE_FOLLOW_DATA,
    payload,
});

export const profileFollowError = payload => ({
    type: PROFILE_FOLLOW_ERROR,
    payload,
});
export const profileFollowersUpdate = payload => ({
    type: PROFILE_FOLLOWERS_START,
    payload,
});
export const profileFollowersError = payload => ({
    type: PROFILE_FOLLOWERS_ERROR,
    payload,
});
export const profileFollowersSuccess = payload => ({
    type: PROFILE_FOLLOWERS_SUCCESS,
    payload,
});
export const profileFollowingStart = payload => ({
    type: PROFILE_FOLLOWING_START,
    payload,
});
export const profileFollowingError = payload => ({
    type: PROFILE_FOLLOWING_ERROR,
    payload,
});
export const profileFollowingSuccess = payload => ({
    type: PROFILE_FOLLOWING_SUCCESS,
    payload,
});
export const profileFollowPostStart = payload => ({
    type: PROFILE_FOLLOW_POST_START,
    payload,
});
export const profileFollowPostError = payload => ({
    type: PROFILE_FOLLOW_POST_ERROR,
    payload,
});
export const profileFollowPostSuccess = payload => ({
    type: PROFILE_FOLLOW_POST_SUCCESS,
    payload,
});
export const userUnfollowStart = payload => ({
    type: USER_UNFOLLOW_START,
    payload,
});
export const userUnfollowSuccess = payload => ({
    type: USER_UNFOLLOW_SUCCESS,
    payload,
});
export const userUnfollowError = payload => ({
    type: USER_UNFOLLOW_ERROR,
    payload,
});
