import {
  VERIFY_START,
  VERIFY_ERROR,
<<<<<<< HEAD
<<<<<<< HEAD
  VERIFY_SUCCESS,
} from './types';

export const verifyUser = payload => ({
    type: VERIFY_START,
    payload,
  });

export const verifySuccess = payload => ({
    type: VERIFY_SUCCESS,
    payload,
  });

export const verifyFail = payload => ({
    type: VERIFY_ERROR,
    payload,
  });
=======
  VERIFY_SUCCESS
=======
  VERIFY_SUCCESS,
>>>>>>> feat(register): add more tests
} from './types';

export const verifyUser = payload => ({
    type: VERIFY_START,
    payload,
  });

export const verifySuccess = payload => ({
    type: VERIFY_SUCCESS,
    payload,
  });

export const verifyFail = payload => ({
    type: VERIFY_ERROR,
<<<<<<< HEAD
    payload: payload
  };
};
>>>>>>> feat(register): add email verification functionality
=======
    payload,
  });
>>>>>>> feat(register): add more tests
