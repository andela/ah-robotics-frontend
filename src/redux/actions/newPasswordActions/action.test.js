import {
    NEW_PASSWORD_START,
    NEW_PASSWORD_ERROR,
    NEW_PASSWORD_SUCCESS
  } from './types';

import { 
    newPasswordStart, 
    newPasswordSuccess, 
    newPasswordFail
 } from './actions';

describe('Password reset trigger', () => {
    it('should dispatch NEW_PASSWORD_START', () => {
      expect(newPasswordStart({}).type).toEqual(NEW_PASSWORD_START);
    });
    it('should not dispatch NEW_PASSWORD_ERROR', () => {
        expect(newPasswordFail({}).type).toEqual(NEW_PASSWORD_ERROR);
        });

});
