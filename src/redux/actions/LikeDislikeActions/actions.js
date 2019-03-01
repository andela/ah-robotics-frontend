import * as types from './types';

export const likeRequest = payload => ({
    type: types.LIKE_ARTICLE_REQUEST,
    payload,
})

export const dislikeRequest = () => ({
    type: types.DISLIKE_ARTICLE_REQUEST,
})
export const likeSuccess = () => ({
    type: types.LIKE_ARTICLE_SUCCESS,
});

export const likeFailure = () => ({
    type: types.LIKE_ARTICLE_ERROR,
});

export const dislikeSuccess = () => ({
    type: types.DISLIKE_ARTICLE_SUCCESS,
});

export const dislikeFailure = () => ({
    type: types.DISLIKE_ARTICLE_ERROR,
});