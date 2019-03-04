import { put, takeEvery } from 'redux-saga/effects';
import updateCommentWatcher, { updateCommentWorker } from './updateCommentSaga';
import * as types from '../../actions/CommentActions/types';

let dispatchedActions = [];

describe('Update Comment Saga Tests', () => {
  it('should listen for correct actions', () => {
    dispatchedActions = [];
    const generator = updateCommentWatcher();
    put({ type: types.UPDATE_COMMENT_START });
    const next = generator.next();
    expect(next.value).toEqual(takeEvery(types.UPDATE_COMMENT_START, updateCommentWorker));
  });
});
