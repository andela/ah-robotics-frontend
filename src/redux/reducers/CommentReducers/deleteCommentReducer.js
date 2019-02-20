import {
  DELETE_COMMENT_START,
  DELETE_COMMENT_FAIL,
  DELETE_COMMENT_SUCCESS,
} from '../../actions/CommentActions/types';

const initialState = {
  comment: {},
  errors: {},
  isDeleting: false,
};

const deleteCommentReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_COMMENT_START: {
      return {
        ...state, isDeleting: true,
      };
    }
    case DELETE_COMMENT_SUCCESS: {
      return {
        ...state, isDeleting: false, errors: {},
      };
    }
    case DELETE_COMMENT_FAIL: {
      return {
        ...state, isDeleting: false,
      };
    }
    default:
      return state;
  }
};

export default deleteCommentReducer;
