import { put, call, takeEvery } from 'redux-saga/effects';
import {
  UPDATE_COMMENT_START,
  UPDATE_COMMENT_SUCCESS,
  UPDATE_COMMENT_FAIL,
  } from '../../actions/CommentActions/types';
import { api } from '../../../utils/auth';

export function* updateCommentWorker({ payload }) {
  const { articleSlug, commentId, commentDetails } = payload;
  try {
    const response = yield call(
      api.put, `/articles/${articleSlug}/comments/${commentId}/`,
      { comment: commentDetails },
    );
    yield put({
      type: UPDATE_COMMENT_SUCCESS,
      payload: { comment: response.data },
    });
  } catch (error) {
    yield put({
      type: UPDATE_COMMENT_FAIL,
      payload: { errors: error.response.data },
    });
  }
}

function* updateCommentWatcher() {
  yield takeEvery(UPDATE_COMMENT_START, updateCommentWorker);
}

export default updateCommentWatcher;
