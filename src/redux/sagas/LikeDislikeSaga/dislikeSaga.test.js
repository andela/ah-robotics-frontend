import { put, takeLatest } from 'redux-saga/effects';
import watchDisLikeArticle, { dislike } from './dislikeSaga';
import * as types from '../../actions/LikeDislikeActions/types';

let dispatchedActions = [];

describe(' Add Dislike Saga Tests', () => {
  it('should listen for correct actions', () => {
    dispatchedActions = [];
    const generator = watchDisLikeArticle();
    put({ type: types.DISLIKE_ARTICLE_REQUEST });
    const next = generator.next();
    expect(next.value).toEqual(takeLatest(types.DISLIKE_ARTICLE_REQUEST, dislike));
  });
});
