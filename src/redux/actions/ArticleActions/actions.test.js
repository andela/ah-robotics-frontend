import {
  articleFetchError, articleFetchSuccess, postArticle,
  postArticleError, postArticleSuccess, updateUserArticle,
  updateUserArticleError, updateUserArticleSuccess,
} from './actions';
import * as types from './types';

describe('articles action tests', () => {
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
});
