import * as types from '../state/types';
const initialState = {
  count: 0,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.COUNT_UPDATE_SUCCESS:
      return {
        ...state,
        count: state.count + 1,
      };
    default:
      return state;
  }
}
