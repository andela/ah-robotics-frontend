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
} from '../../actions/userFollowActions/types';

export const initialState = {
    error: {},
    isLoading: false,
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
            return { ...state, isLoading: true, errors: {} };
        }
        default:
            return state;
    }
};

export default userFollowReducer;
