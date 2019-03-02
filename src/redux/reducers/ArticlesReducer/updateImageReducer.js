import * as types from '../../actions/ArticleActions/types';

export const initialState = {
  errors: [],
  isUpdating: false,
  success: false,
  isUpdated: false,
};

const updateImageReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPLOAD_ARTICLE_IMAGE_START: {
      return {
        ...state, ...action.payload, isUpdating: true,
      };
    }
    case types.UPLOAD_ARTICLE_IMAGE_SUCCESS: {
      return {
        ...state, ...action.payload, isUpdating: false, isUpdated: true, errors: {},
      };
    }
    case types.UPLOAD_ARTICLE_IMAGE_ERROR: {
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
export default updateImageReducer;
