import {
  articleFetchError, articleFetchSuccess, postArticle,
  postArticleError, postArticleSuccess, updateUserArticle,
  updateUserArticleError, updateUserArticleSuccess,
  articleImageUpload, articleImageUploadSuccess,
  articleImageUploadError, deleteUserArticle,
  deleteUserArticleError, deleteUserArticleSuccess, articleFetch,
} from './actions';
import * as types from './types';

describe('articles action tests', () => {
  it('test article fetch action', () => {
    const payload = {};
    expect(articleFetch(payload)).toEqual(
      { payload: {}, type: types.ARTICLE_FETCH },
    );
  });
  it('test article fetch action success', () => {
    const articles = { articles: [] };
    expect(articleFetchSuccess(articles)).toEqual(
      { payload: articles, type: types.ARTICLE_FETCH_SUCCESS },
    );
  });
  it('test article fetch action error', () => {
    const errors = { errors: {} };
    expect(articleFetchError(errors)).toEqual({ payload: errors, type: types.ARTICLE_FETCH_ERROR });
  });
  it('test article post action', () => {
    const article = {
      title: 'party x',
      description: 'this is it',
      body: '.. fix ...',
      tagList: ['fam', 'ke'],
    };
    expect(postArticle(article)).toEqual({ payload: article, type: types.ARTICLE_POST });
  });
  it('test article post action success', () => {
    const message = 'article posted successfully';
    expect(postArticleSuccess(message)).toEqual(
      { payload: message, type: types.ARTICLE_POST_SUCCESS },
    );
  });
  it('test article post action error', () => {
    const errors = {
      title: 'title is required',
    };
    expect(postArticleError(errors)).toEqual({ payload: errors, type: types.ARTICLE_POST_ERROR });
  });
  it('test update article action', () => {
    const article = {
      title: 'party x',
      description: 'this is it',
      body: '.. fix ...',
      tagList: ['fam', 'ke'],
    };
    expect(updateUserArticle(article)).toEqual({ payload: article, type: types.ARTICLE_UPDATE });
  });
  it('test update article action success', () => {
    const message = 'article updated successfully';
    expect(updateUserArticleSuccess(message)).toEqual(
      { payload: message, type: types.ARTICLE_UPDATE_SUCCESS },
    );
  });
  it('test update article action error', () => {
    const errors = {
      title: 'title is required',
    };
    expect(updateUserArticleError(errors)).toEqual(
      { payload: errors, type: types.ARTICLE_UPDATE_ERROR },
    );
  });
  it('test update article image action', () => {
    const payload = {
      slug: 'party-x',
      image: '',
    };
    expect(articleImageUpload(payload)).toEqual(
      { payload, type: types.UPLOAD_ARTICLE_IMAGE_START },
    );
  });
  it('test update article image action success', () => {
    const message = 'image updated successfully';
    expect(articleImageUploadSuccess(message)).toEqual(
      { payload: message, type: types.UPLOAD_ARTICLE_IMAGE_SUCCESS },
    );
  });
  it('test update article image action error', () => {
    const errors = {
      image: ['invalid file'],
    };
    expect(articleImageUploadError(errors)).toEqual(
      { payload: errors, type: types.UPLOAD_ARTICLE_IMAGE_ERROR },
    );
  });
  it('test delete article action', () => {
    const payload = {};
    expect(deleteUserArticle(payload)).toEqual(
      { payload: {}, type: types.ARTICLE_DELETE },
    );
  });
  it('test delete article action success', () => {
    const payload = { slug: '' };
    expect(deleteUserArticleSuccess(payload)).toEqual(
      { payload, type: types.ARTICLE_DELETE_SUCCESS },
    );
  });
  it('test delete article action error', () => {
    const errors = { errors: {} };
    expect(deleteUserArticleError(errors)).toEqual(
      { payload: errors, type: types.ARTICLE_DELETE_ERROR },
    );
  });
});
