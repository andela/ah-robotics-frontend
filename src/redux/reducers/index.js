import { combineReducers } from 'redux';
import loginReducer from './LoginReducer/loginReducer';
import registerReducer from './RegisterReducer/registerReducer';
import verifyReducer from './VerifyRegristrationReducer/verifyRegistrationReducer';
import resetPasswordReducer from './resetPasswordReducer/resetpasswordreducer';
import newPasswordReducer from './newPasswordReducer/newPasswordreducer';

const rootReducer = combineReducers({
  login: loginReducer,
  register: registerReducer,
  verifyUser: verifyReducer,
  resetPassword: resetPasswordReducer,
  newPassword: newPasswordReducer
});

export default rootReducer;
