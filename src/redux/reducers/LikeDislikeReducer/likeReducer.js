import {
  LIKE_ARTICLE_REQUEST,
  LIKE_ARTICLE_SUCCESS,
  LIKE_ARTICLE_ERROR,
} from '../../actions/LikeDislikeActions/types';

export const initialState = {
  likes: 0,
  dislikes: 0,
  like_status: false,
  isLiking: false,
  errors: {},
};

const likeReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIKE_ARTICLE_REQUEST: {
      return {
        ...state,
        ...action.payload,
        isLiking: true,
        errors: {},
      };
    }
    case LIKE_ARTICLE_SUCCESS: {
      return {
        ...state,
        ...action.payload,
        isLiking: false,
        errors: {},
        like_status: true,
      };
    }
    case LIKE_ARTICLE_ERROR: {
      return {
        ...state,
        ...action.payload,
        isLiking: false,
        like_status: false,
      };
    }
    default:
      return state;
  }
};

export default likeReducer;