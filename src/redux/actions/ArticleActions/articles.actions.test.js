import { articleFetch, articleFetchError, articleFetchSuccess } from './articles.actions';
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
});
