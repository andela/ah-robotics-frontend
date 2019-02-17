import newPasswordReducer, { initialState } from './newPasswordreducer';
import {NEW_PASSWORD_START, NEW_PASSWORD_SUCCESS, NEW_PASSWORD_ERROR
} from '../../actions/newPasswordActions/types';

describe('newPassword reducer tests', () => {
  it('it should have an initial state', () => {
    expect(newPasswordReducer(initialState, {})).toEqual({'errors': {}, 'isResetting': false, 'message': '', 'success': false});
  });
  it('it should show is loading on resetPassword submit', () => {
  expect(newPasswordReducer(null, {
    type: NEW_PASSWORD_START,
    payload: {},
  }).isResetting).toEqual(true);
  });
  it('it should set isResetting to succesful on resetPassword', () => {
    expect(newPasswordReducer(null, {
      type: NEW_PASSWORD_SUCCESS,
      payload: {},
    }).isResetting).toEqual(false);
  });
//   it('it should set isResetting to false on resetPassword error', () => {
//     expect(newPasswordReducer(null, {
//       type: NEW_PASSWORD_ERROR,
//       payload: {},
//     }).isResetting).toEqual(false);
//   });
});

