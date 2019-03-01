import {
    LIKE_ARTICLE_SUCCESS,
    LIKE_ARTICLE_ERROR,
    DISLIKE_ARTICLE_SUCCESS,
    DISLIKE_ARTICLE_ERROR,
    LIKE_ARTICLE_REQUEST,
    DISLIKE_ARTICLE_REQUEST,
  } from '../../actions/LikeDislikeActions/types';

  export const initialState = {
    like_status: false,
    likes: 0,
    dislike_status: false,
    dislikes: 0,
    isLiking: false,
    isDisliking: false,
    errors: {}
  };

  const likeDislikeReducer=  (state=initialState, action ) => {
      switch (action.type) {
          case LIKE_ARTICLE_REQUEST: {
              return {
                ...state,
                isLiking: true,
                errors: {},
              }
          }
          case LIKE_ARTICLE_SUCCESS: {
            return{
                ...state,
                isLiking: false,
                like: 1,
                errors: {},
            }
          }
          case LIKE_ARTICLE_ERROR: {
            return {
                ...state,
                isLiking: false,
                errors: {},
            }
          }
          case DISLIKE_ARTICLE_REQUEST: {
              return {
                ...state,
                isdisLiking: true,
                errors: {},
              }
          }
          case DISLIKE_ARTICLE_SUCCESS: {
              return {
                ...state,
                isdisLiking: false,
                dislikes: 1,
                errors: {},
              }
          }
          case DISLIKE_ARTICLE_ERROR: {
              return {
                ...state,
                isdisLiking: false,
                errors: {},
              }
          }
          default:
            return state;
            

      }
  }

  export default likeDislikeReducer;