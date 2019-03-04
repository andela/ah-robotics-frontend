import { put, takeEvery } from 'redux-saga/effects';
import getCommentsWatcher, { getCommentsWorker } from './getCommentsSaga';
import * as types from '../../actions/CommentActions/types';

let dispatchedActions = [];

describe('Get Comment Saga Tests', () => {
  it('should listen for correct actions', () => {
    dispatchedActions = [];
    const generator = getCommentsWatcher();
    put({ type: types.GET_COMMENTS_START });
    const next = generator.next();
    expect(next.value).toEqual(takeEvery(types.GET_COMMENTS_START, getCommentsWorker));
  });
});
