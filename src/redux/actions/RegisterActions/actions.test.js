import * as actions from './actions';
import * as types from './types';


const user = {
  email: 'tester123@gmail.com',
  username: 'tester123',
  password: 'tester@123',
};

describe('register actions', () => {
  it('should create an action to start registration', () => {
    // const text = 'Finish docs'
    const expectedAction = {
      type: types.REGISTER_START,
      payload: user,
    };
    expect(actions.registerUser(user)).toEqual(expectedAction);
  });

  it('should create an action to indicate successful registration', () => {
    // const text = 'Finish docs'
    const expectedAction = {
      type: types.REGISTER_SUCCESS,
      payload: user,
    };
    expect(actions.registerSuccess(user)).toEqual(expectedAction);
  });

  it('should create an action to indicate failed registration', () => {
    // const text = 'Finish docs'
    const expectedAction = {
      type: types.REGISTER_ERROR,
      payload: user,
    };
    expect(actions.registerFail(user)).toEqual(expectedAction);
  });
});
