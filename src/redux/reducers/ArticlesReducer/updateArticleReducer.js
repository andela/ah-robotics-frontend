import * as types from '../../actions/ArticleActions/types';

export const initialState = {
  errors: {},
  isUpdating: false,
  success: false,
  isUpdated: false,
};

const updateArticlesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ARTICLE_UPDATE: {
      return {
        ...state, ...action.payload, isUpdating: true,
      };
    }
    case types.ARTICLE_UPDATE_SUCCESS: {
      return {
        ...state, ...action.payload, isUpdating: false, isUpdated: true,
      };
    }
    case types.ARTICLE_UPDATE_ERROR: {
      return {
        ...state, ...action.payload, isUpdating: false, isUpdated: false,
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
