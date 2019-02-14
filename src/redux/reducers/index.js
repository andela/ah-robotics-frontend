import { combineReducers } from 'redux';
import loginReducer from './LoginReducer/login.reducer';

const rootReducer = combineReducers({
  login: loginReducer,
});

export default rootReducer;
