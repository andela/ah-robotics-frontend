import { put, takeEvery } from 'redux-saga/effects';
import deleteCommentWatcher, { deleteCommentWorker } from './deleteCommentSaga';
import * as types from '../../actions/CommentActions/types';

let dispatchedActions = [];

describe('Delete Comment Saga Tests', () => {
  it('should listen for correct actions', () => {
    dispatchedActions = [];
    const generator = deleteCommentWatcher();
    put({ type: types.DELETE_COMMENT_START });
    const next = generator.next();
    expect(next.value).toEqual(takeEvery(types.DELETE_COMMENT_START, deleteCommentWorker));
  });
});
