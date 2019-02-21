import * as types from './types';
import * as actions from './actions';

describe('test rating actions', () => {
    it('should dispatch SELECT RATE', () => {
    expect(actions.selectedRating({}).type).toBe(types.SELECT_RATE);
    });
    it('should dispatch RATING_SUCESS', () => {
        expect(actions.ratingSucces({}).type).toBe(types.RATING_SUCCESS);
        });
    it('should dispatch RATING_UPDATE', () => {
        expect(actions.ratingUpdate({}).type).toBe(types.UPDATE_RATE);
        });
    it('should dispatch RATING_ERROR', () => {
        expect(actions.ratingError({}).type).toBe(types.RATING_ERROR);
        });
});
