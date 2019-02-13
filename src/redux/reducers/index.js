import { combineReducers } from 'redux';
import loginReducer from './LoginReducer/login.reducer';
import registerReducer from './RegisterReducer/registerReducer';

const rootReducer = combineReducers({
  login: loginReducer,
  register: registerReducer,
});

export default rootReducer;
