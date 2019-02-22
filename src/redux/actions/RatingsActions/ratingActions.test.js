import * as types from './types';
import * as actions from './actions';

describe('test rating actions', () => {
  const data = {
    messsage: 'successfully rated',
  };
  const payload = {
    data: 3.5,
  };
  const error = {
    error: 'You have an error',
  };
  it('should dispatch SELECT RATE', () => {
    expect(actions.selectedRating({}).type).toBe(types.SELECT_RATE);
  });
  it('should dispatch RATING_SUCESS', () => {
    expect(actions.ratingSuccess({}).type).toBe(types.RATING_SUCCESS);
    expect(actions.ratingSuccess(data).payload).toEqual({ messsage: 'successfully rated' });
  });
  it('should dispatch RATING_UPDATE', () => {
    expect(actions.ratingUpdate({}).type).toBe(types.UPDATE_RATE);
    expect(actions.ratingUpdate(payload).payload).toEqual({ data: 3.5 });
  });
  it('should dispatch RATING_ERROR', () => {
    expect(actions.ratingError({}).type).toBe(types.RATING_ERROR);
    expect(actions.ratingError(error).payload).toEqual({
      error: 'You have an error',
    });
  });
});
