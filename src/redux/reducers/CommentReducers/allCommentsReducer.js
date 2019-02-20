import {
  GET_COMMENTS_START,
  GET_COMMENTS_SUCCESS,
  GET_COMMENTS_FAIL,
} from '../../actions/CommentActions/types';

const initialState = {
  comments: [],
  errors: {},
  isLoading: false,
};

const allCommentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMMENTS_START: {
      return {
        ...state, ...action.payload, isLoading: true,
      };
    }
    case GET_COMMENTS_SUCCESS: {
      return {
        ...state, ...action.payload, isLoading: false, errors: {},
      };
    }
    case GET_COMMENTS_FAIL: {
      return {
        ...state, ...action.payload, comments: [], isLoading: false,
      };
    }
    default:
      return state;
  }
};

export default allCommentsReducer;
