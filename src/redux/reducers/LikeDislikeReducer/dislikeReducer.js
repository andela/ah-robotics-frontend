import {
  DISLIKE_ARTICLE_REQUEST,
  DISLIKE_ARTICLE_SUCCESS,
  DISLIKE_ARTICLE_ERROR,
} from '../../actions/LikeDislikeActions/types';

export const initialState = {
  dislike_status: false,
  isDisliking: false,
  errors: {},
};

const dislikeReducer = (state = initialState, action) => {
  switch (action.type) {
    case DISLIKE_ARTICLE_REQUEST: {
      return {
        ...state,
        ...action.payload,
        isdisLiking: true,
        errors: {},
      };
    }
    case DISLIKE_ARTICLE_SUCCESS: {
      return {
        ...state,
        ...action.payload,
        isdisLiking: false,
        errors: {},
        dislike_status: true,
      };
    }
    case DISLIKE_ARTICLE_ERROR: {
      return {
        ...state,
        ...action.payload,
        isdisLiking: false,
        dislike_status: false,
      };
    }
    default:
      return state;
  }
};

export default dislikeReducer;
