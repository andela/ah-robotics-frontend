import {
    PROFILE_FOLLOW_DATA,
    PROFILE_FOLLOW_DATA_SUCCESS,
    PROFILE_FOLLOWERS_START,
    PROFILE_FOLLOWERS_ERROR,
    PROFILE_FOLLOWERS_SUCCESS,
    PROFILE_FOLLOWING_START,
    PROFILE_FOLLOWING_ERROR,
    PROFILE_FOLLOWING_SUCCESS,
} from '../../actions/userFollowActions/types';

export const initialState = {
    profileFollowData: {},
    error: {},
    profileFollowersUpdate: false,
    isLoading: false,
    Followers: 0,
    Following: 0,
};

const userFollowReducer = (state = initialState, action) => {
    switch (action.type) {
        case PROFILE_FOLLOW_DATA: {
            return { ...state, ...action.payload, isLoading: false };
        }
        case PROFILE_FOLLOW_DATA_SUCCESS: {
            return { ...state, isLoading: false };
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
        default:
            return state;
    }
};

export default userFollowReducer;
