import * as types from '../../actions/RatingsActions/types';
import ratingReducer from './ratingsReducer';
import initialState from './initialState';

describe('tests ratings reducer', () => {
    it('it should have an initial state', () => {
        expect(ratingReducer(initialState, {})).toEqual(initialState);
    });
    it('it should set isError to true when RATING_ERROR is dispatched', () => {
        const action = {
            type: types.RATING_ERROR,
            payload: {},
        };
        expect(ratingReducer(initialState, action).isError).toEqual(true);
    });
    it('it should set isSuccess to true when RATING_SUCCESS is dispatched', () => {
        const action = {
            type: types.RATING_SUCCESS,
            payload: {},
        };
        expect(ratingReducer(initialState, action).isSuccess).toEqual(true);
    });
    it('it should set isUpdated to true when UPDATE_RATE is dispatched', () => {
        const action = {
            type: types.UPDATE_RATE,
            payload: {},
        };
        expect(ratingReducer(initialState, action).isUpdated).toEqual(true);
    });
    it('it should initaite SELECT-rate', () => {
        const action = {
            type: types.SELECT_RATE,
            payload: {},
        };
        expect(ratingReducer(initialState, action).isLoading).toEqual(true);
    });
});
