import { put, call, takeLatest } from 'redux-saga/effects';
import * as types from '../../actions/LikeDislikeActions/types';
import { api } from '../../../utils/auth';

const slug = 'django-sims';

export const apiDislikeClient = {
    dislikeUrl: (slug, payload) => api.post(`articles/${slug}/dislike/`, payload),
};


export function* dislike({ payload }) {
    try {
        const { slug } = payload.match.params;
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
