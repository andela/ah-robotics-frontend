import {
    PROFILE_FOLLOW_DATA,
    PROFILE_FOLLOW_ERROR,
    PROFILE_FOLLOWERS_START,
    PROFILE_FOLLOWERS_ERROR,
    PROFILE_FOLLOWERS_SUCCESS,
    PROFILE_FOLLOWING_START,
    PROFILE_FOLLOWING_ERROR,
    PROFILE_FOLLOWING_SUCCESS,
    PROFILE_DELETE_START,
    PROFILE_DELETE_SUCCESS,
    PROFILE_DELETE_ERROR,
} from './types';

import {
    profileFollowData,
    profileFollowError,
    profileFollowersError,
    profileFollowersSuccess,
    profileFollowersUpdate,
    profileFollowingError,
    profileFollowingSuccess,
    profileFollowingStart,
} from './actions';

describe('Profile action creator', () => {
    it('should dispatch PROFILE_FOLLOW_DATA', () => {
        expect(profileFollowData({}).type).toEqual(PROFILE_FOLLOW_DATA);
    });
    it('should dispatch PROFILE_FOLLOW_ERROR', () => {
        expect(profileFollowError({}).type).toEqual(PROFILE_FOLLOW_ERROR);
    });
    it('should dispatch PROFILE_FOLLOWERS_START', () => {
        expect(profileFollowersUpdate({}).type).toEqual(PROFILE_FOLLOWERS_START);
    });
    it('should dispatch PROFILE_FOLLOWERS_ERROR', () => {
        expect(profileFollowersError({}).type).toEqual(PROFILE_FOLLOWERS_ERROR);
    });
    it('should dispatch PROFILE_FOLLOWERS_SUCCESS', () => {
        expect(profileFollowersSuccess({}).type).toEqual(PROFILE_FOLLOWERS_SUCCESS);
    });
    it('should dispatch PROFILE_FOLLOWING_START', () => {
        expect(profileFollowingStart({}).type).toEqual(PROFILE_FOLLOWING_START);
    });
    it('should dispatch PROFILE_FOLLOWING_ERROR', () => {
        expect(profileFollowingError({}).type).toEqual(PROFILE_FOLLOWING_ERROR);
    });
    it('should dispatch PROFILE_FOLLOWING_SUCCESS', () => {
        expect(profileFollowingSuccess({}).type).toEqual(PROFILE_FOLLOWING_SUCCESS);
    });
});
  