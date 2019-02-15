import * as actions from './actions';
import * as types from './types';


const user = {
  email: 'tester123@gmail.com',
  username: 'tester123',
  password: 'tester@123',
};

describe('verify actions', () => {
  it('should create an action to start verification', () => {
    // const text = 'Finish docs'
    const expectedAction = {
      type: types.VERIFY_START,
      payload: user,
    };
    expect(actions.verifyUser(user)).toEqual(expectedAction);
  });

  it('should create an action to indicate successful verification', () => {
    // const text = 'Finish docs'
    const expectedAction = {
      type: types.VERIFY_SUCCESS,
      payload: user,
    };
    expect(actions.verifySuccess(user)).toEqual(expectedAction);
  });

  it('should create an action to indicate failed verification', () => {
    // const text = 'Finish docs'
    const expectedAction = {
      type: types.VERIFY_ERROR,
      payload: user,
    };
    expect(actions.verifyFail(user)).toEqual(expectedAction);
  });
});
