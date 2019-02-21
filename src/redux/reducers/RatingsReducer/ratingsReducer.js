import initialState from './initialState';
import * as types from '../../actions/RatingsActions/types';


export default (state = initialState, action) => {
    switch (action.type) {
        case types.SELECT_RATE:
            return {
                ...state,
                ...action.payload,
                isLoading: true,
            };
        case types.RATING_SUCCESS:
            return {
                ...state,
                ...action.payload,
                isLoading: false,
                isSuccess: true,
                isUpdated: false,
                isError: false,
                error: {},

            };
            case types.UPDATE_RATE:
            return {
                ...state,
                ...action.payload,
                isLoading: false,
                isUpdated: true,
                isSuccess: false,
                isError: false,
                error: {},
            };
        case types.RATING_ERROR:
            return {
                ...state,
                ...action.payload,
                isLoading: false,
                isUpdated: false,
                isSuccess: false,
                isError: true,
            };
        default:
            return state;
    }
};
