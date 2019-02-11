import { combineReducers } from 'redux';

import appReducer from '../containers/app/state/reducer';

const rootReducer = combineReducers({
  count: appReducer,
});

export default rootReducer;
