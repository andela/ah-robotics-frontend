import { combineReducers } from 'redux';
import resetPasswordReducer from '../store/resetPassword/resetpasswordreducer';
import newPasswordReducer from './newPassword/newPasswordreducer';

const rootReducer = combineReducers({
  resetPassword: resetPasswordReducer,
  newPassword: newPasswordReducer
});
export default rootReducer;
