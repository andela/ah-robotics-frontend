import {
 articleFetch, articleFetchError, articleFetchSuccess, postArticle,
  postArticleError, postArticleSuccess,
} from './articles.actions';
import * as types from './articles.action.types';

describe('articles action tests', () => {
it('test article fetch action', () => {
  expect(articleFetch({}).type).toBe(types.ARTICLE_FETCH);
});
  it('test article fetch action success', () => {
    expect(articleFetchSuccess({}).type).toBe(types.ARTICLE_FETCH_SUCCESS);
  });
  it('test article fetch action error', () => {
    expect(articleFetchError({}).type).toBe(types.ARTICLE_FETCH_ERROR);
  });
  it('test article post action', () => {
    expect(postArticle({}).type).toBe(types.ARTICLE_POST);
  });
  it('test article post action success', () => {
    expect(postArticleSuccess({}).type).toBe(types.ARTICLE_POST_SUCCESS);
  });
  it('test article post action error', () => {
    expect(postArticleError({}).type).toBe(types.ARTICLE_POST_ERROR);
  });
});
