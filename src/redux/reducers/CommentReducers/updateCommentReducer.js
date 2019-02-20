import {
  UPDATE_COMMENT_START,
  UPDATE_COMMENT_SUCCESS,
  UPDATE_COMMENT_FAIL,
} from '../../actions/CommentActions/types';

const initialState = {
  comment: {},
  errors: {},
  isUpdating: false,
  success: false,
};

const updateCommentReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_COMMENT_START: {
      return {
        ...state, ...action.payload, isUpdating: true, success: false,
      };
    }
    case UPDATE_COMMENT_SUCCESS: {
      return {
        ...state, ...action.payload, isUpdating: false, errors: {}, success: true,
      };
    }
    case UPDATE_COMMENT_FAIL: {
      return {
        ...state, ...action.payload, isUpdating: false, success: false,
      };
    }
    default:
      return state;
  }
};

export default updateCommentReducer;
