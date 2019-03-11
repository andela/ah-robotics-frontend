import {
    PROFILE_FOLLOW_DATA,
    PROFILE_FOLLOW_DATA_SUCCESS,
    PROFILE_FOLLOWERS_START,
    PROFILE_FOLLOWERS_ERROR,
    PROFILE_FOLLOWERS_SUCCESS,
    PROFILE_FOLLOWING_START,
    PROFILE_FOLLOWING_ERROR,
    PROFILE_FOLLOWING_SUCCESS,
    PROFILE_FOLLOW_POST_START,
    PROFILE_FOLLOW_POST_SUCCESS,
    PROFILE_FOLLOW_POST_ERROR,
    PROFILE_FOLLOW_USER_ERROR,
    USER_UNFOLLOW_START,
    USER_UNFOLLOW_SUCCESS,
    USER_UNFOLLOW_ERROR,
} from '../../actions/UserFollowActions/types';

export const initialState = {
    isLoading: false,
    error: {},
};

const userFollowReducer = (state = initialState, action) => {
    switch (action.type) {
        case PROFILE_FOLLOW_DATA: {
            return { ...state, ...action.payload, isLoading: false };
        }
        case PROFILE_FOLLOW_DATA_SUCCESS: {
            return { ...state, ...action.payload, isLoading: false };
        }
        case PROFILE_FOLLOWERS_ERROR: {
            return { ...state, isLoading: true, errors: {} };
        }
        case PROFILE_FOLLOWERS_START: {
            return { ...state, profileFollowData: action.payload, isLoading: true };
        }
        case PROFILE_FOLLOWERS_SUCCESS: {
            return { ...action.payload, isLoading: false };
        }
        case PROFILE_FOLLOWING_START: {
            return { ...state, profileFollowData: action.payload, isLoading: true };
        }
        case PROFILE_FOLLOWING_SUCCESS: {
            return { ...action.payload, isLoading: false };
        }
        case PROFILE_FOLLOWING_ERROR: {
            return { ...state, isLoading: true, errors: {} };
        }
        case PROFILE_FOLLOW_POST_START: {
            return { ...state, profileFollowData: action.payload, isLoading: true };
        }
        case PROFILE_FOLLOW_POST_SUCCESS: {
            return { ...action.payload, isLoading: false };
        }
        case PROFILE_FOLLOW_POST_ERROR: {
            return { ...action.payload, isLoading: true, errors: {} };
        }
        case PROFILE_FOLLOW_USER_ERROR: {
            return { isLoading: false, errors: action.payload };
        }
        case USER_UNFOLLOW_START: {
            return { isLoading: true };
        }
        case USER_UNFOLLOW_SUCCESS: {
            return { isLoading: false, ...action.payload };
        }
        case USER_UNFOLLOW_ERROR: {
            return { isLoading: false, ...action.payload };
        }
        default:
            return state;
    }
};

export default userFollowReducer;
