import { put, call, takeEvery } from 'redux-saga/effects';
import { api } from '../../../utils/auth';
import {
  GET_COMMENTS_START,
  GET_COMMENTS_SUCCESS,
  GET_COMMENTS_FAIL,
} from '../../actions/CommentActions/types';

export function* getCommentsWorker(payload) {
  const { articleSlug } = payload.payload;
  try {
    const response = yield call(api.get, `/articles/${articleSlug}/comments/`);
    yield put({
      type: GET_COMMENTS_SUCCESS,
      payload: { comments: response.data },
    });
  } catch (error) {
    yield put({
      type: GET_COMMENTS_FAIL,
      payload: { errors: error.response.data.comment.error },
    });
  }
}

function* getCommentsWatcher() {
  yield takeEvery(GET_COMMENTS_START, getCommentsWorker);
}

export default getCommentsWatcher;
