import { put, call, takeLatest } from 'redux-saga/effects';
import * as types from '../../actions/LikeDislikeActions/types';
import { api } from '../../../utils/auth';

export const apiDislikeClient = {
    dislikeUrl: slug => api.post(`articles/${slug}/dislike/`),
};


export function* dislike(payload) {
    const { slug } = payload.payload;
    try {
        const response = yield call(apiDislikeClient.dislikeUrl, slug);
        yield put({
            type: types.DISLIKE_ARTICLE_SUCCESS,
            payload: response.data,
        });
    } catch (error) {
        yield put({
            type: types.DISLIKE_ARTICLE_ERROR,
            payload: { error: error.response.data },
        });
    }
}

function* watchDisLikeArticle() {
    yield takeLatest(types.DISLIKE_ARTICLE_REQUEST, dislike);
}

export default watchDisLikeArticle;
