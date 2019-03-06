import { put, takeLatest } from 'redux-saga/effects';
import watchLikeArticle, { like } from './likeSaga';
import * as types from '../../actions/LikeDislikeActions/types';

let dispatchedActions = [];

describe(' Add Like Saga Tests', () => {
  it('should listen for correct actions', () => {
    dispatchedActions = [];
    const generator = watchLikeArticle();
    put({ type: types.LIKE_ARTICLE_REQUEST });
    const next = generator.next();
    expect(next.value).toEqual(takeLatest(types.LIKE_ARTICLE_REQUEST, like));
  });
});
