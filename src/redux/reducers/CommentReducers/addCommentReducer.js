import {
  ADD_COMMENT_START,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_FAIL,
} from '../../actions/CommentActions/types';

const initialState = {
  comment: {},
  errors: {},
  isCommenting: false,
  body: '',
  success: false,
};

const addCommentReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT_START: {
      return {
        ...state, ...action.payload, isCommenting: true,
      };
    }
    case ADD_COMMENT_SUCCESS: {
      return {
        ...state, ...action.payload, isCommenting: false, errors: {}, success: true,
      };
    }
    case ADD_COMMENT_FAIL: {
      return {
        ...state, ...action.payload, isCommenting: false, success: false,
      };
    }
    default:
      return state;
  }
};

export default addCommentReducer;
