import { combineReducers } from 'redux';
import resetPasswordReducer from '../store/resetPassword/resetpasswordreducer';
const rootReducer = combineReducers({
    resetPassword: resetPasswordReducer,
});
export default rootReducer;
