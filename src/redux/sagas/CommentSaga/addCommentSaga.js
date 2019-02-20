import { put, call, takeEvery } from 'redux-saga/effects';
import {
  ADD_COMMENT_START,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_FAIL,
} from '../../actions/CommentActions/types';
import { api } from '../../../utils/auth';

export function* addCommentWorker(payload) {
  const { articleSlug, commentDetails } = payload.payload;
  try {
    const response = yield call(
      api.post, `/articles/${articleSlug}/comments/`,
      { comment: commentDetails },
    );
    yield put({
      type: ADD_COMMENT_SUCCESS,
      payload: { comment: response.data },
    });
  } catch (error) {
    yield put({
      type: ADD_COMMENT_FAIL,
      payload: { errors: error.response.data },
    });
  }
}

function* addCommentWatcher() {
  yield takeEvery(ADD_COMMENT_START, addCommentWorker);
}

export default addCommentWatcher;
