import * as types from '../../actions/ArticleActions/articles.action.types';

export const initialState = {
  errors: {},
  isPosting: false,
  success: false,
  isPosted: false,
};

const postArticlesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ARTICLE_POST: {
      return {
        ...state, ...action.payload, isPosting: true,
      };
    }
    case types.ARTICLE_POST_SUCCESS: {
      return {
        ...state, ...action.payload, isPosting: false, isPosted: true,
      };
    }
    case types.ARTICLE_POST_ERROR: {
      return {
        ...state, ...action.payload, isPosting: false, isPosted: false,
      };
    }
    default: {
      return state;
    }
  }
};
export default postArticlesReducer;
