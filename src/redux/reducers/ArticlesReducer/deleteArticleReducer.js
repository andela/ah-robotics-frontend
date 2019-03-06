import * as types from '../../actions/ArticleActions/types';

export const initialState = {
  errors: {},
  isDeleting: false,
  success: false,
  isDeleted: false,
};

const updateArticlesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ARTICLE_DELETE: {
      return {
        ...state, ...action.payload, isDeleting: true,
      };
    }
    case types.ARTICLE_DELETE_SUCCESS: {
      return {
        ...state, ...action.payload, isDeleting: false, isDeleted: true,
      };
    }
    case types.ARTICLE_DELETE_ERROR: {
      return {
        ...state, ...action.payload, isDeleting: false, isDeleted: false,
      };
    }
    case types.CLEAR: {
      return initialState;
    }
    default: {
      return state;
    }
  }
};
export default updateArticlesReducer;
