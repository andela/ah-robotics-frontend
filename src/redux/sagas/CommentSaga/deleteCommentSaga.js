import { put, call, takeEvery } from 'redux-saga/effects';
import {
  DELETE_COMMENT_START,
  DELETE_COMMENT_SUCCESS,
  DELETE_COMMENT_FAIL,
  } from '../../actions/CommentActions/types';
import { api } from '../../../utils/auth';

export function* deleteCommentWorker(payload) {
  const { articleSlug, commentId } = payload.payload;

  try {
    const response = yield call(
      api.delete,
      `/articles/${articleSlug}/comments/${commentId}/`,
    );
    yield put({
      type: DELETE_COMMENT_SUCCESS,
      payload: { comment: response.data },
    });
  } catch (error) {
    yield put({
      type: DELETE_COMMENT_FAIL,
      payload: { errors: error.response.data },
    });
  }
}

function* deleteCommentWatcher() {
  yield takeEvery(DELETE_COMMENT_START, deleteCommentWorker);
}

export default deleteCommentWatcher;
