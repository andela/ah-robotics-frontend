import { put, takeEvery } from 'redux-saga/effects';
import addCommentWatcher, { addCommentWorker } from './addCommentSaga';
import * as types from '../../actions/CommentActions/types';

let dispatchedActions = [];

describe(' Add Comment Saga Tests', () => {
  it('should listen for correct actions', () => {
    dispatchedActions = [];
    const generator = addCommentWatcher();
    put({ type: types.ADD_COMMENT_START });
    const next = generator.next();
    expect(next.value).toEqual(takeEvery(types.ADD_COMMENT_START, addCommentWorker));
  });
});
