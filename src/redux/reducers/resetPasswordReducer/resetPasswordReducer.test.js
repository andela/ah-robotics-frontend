import resetPasswordReducer from './resetpasswordreducer';
import { RESET_PASSWORD_START, RESET_PASSWORD_SUCCESS, RESET_PASSWORD_ERROR } from '../../actions/resetPasswordActions/resetPasswordTypes';

describe('resetPassword reducer tests', () => {
  it('it should have an initial state', () => {
    expect(resetPasswordReducer(resetPasswordReducer.initialState, {})).toEqual({
email: '', errors: {}, success: false, message: {},
});
  });
  it('it should show is loading on resetPassword submit', () => {
    expect(resetPasswordReducer(null, {
      type: RESET_PASSWORD_START,
      payload: {},
    }).isReseting).toEqual(true);
  });
  it('it should set isReseting to succesful on resetPassword', () => {
    expect(resetPasswordReducer(null, {
      type: RESET_PASSWORD_SUCCESS,
      payload: {},
    }).isReseting).toEqual(false);
  });
  it('it should set isReseting to false on resetPassword error', () => {
    expect(resetPasswordReducer(null, {
      type: RESET_PASSWORD_ERROR,
      payload: {},
    }).isReseting).toEqual(false);
  });
});
