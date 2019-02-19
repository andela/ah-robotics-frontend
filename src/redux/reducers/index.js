import { combineReducers } from 'redux';
import loginReducer from './LoginReducer/loginReducer';
import registerReducer from './RegisterReducer/registerReducer';
import verifyReducer from './VerifyRegristrationReducer/verifyRegistrationReducer';

const rootReducer = combineReducers({
  login: loginReducer,
  register: registerReducer,
  verifyUser: verifyReducer,
});

export default rootReducer;
