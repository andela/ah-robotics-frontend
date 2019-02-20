import * as types from '../../actions/ArticleActions/articles.action.types';

export const initialState = {
  errors: {},
  isFetching: false,
  isAuthenticated: false,
  success: false,
  data: {},
};

const fetchArticlesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ARTICLE_FETCH: {
      return {
        ...state, ...action.payload, isFetching: true,
      };
  }
    case types.ARTICLE_FETCH_SUCCESS: {
      return {
 ...state, ...action.payload, isFetching: false,
      };
    }
    case types.ARTICLE_FETCH_ERROR: {
      return {
        ...state, ...action.payload, isFetching: false,
      };
    }
    default: {
      return state;
    }
}
};
export default fetchArticlesReducer;
