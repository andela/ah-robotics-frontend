import * as types from './types';
import * as actions from './actions';

describe('Add Comment Actions Tests', () => {
  it('should dispatch ADD_COMMENT_START', () => {
    expect(actions.addArticleComment({}).type).toEqual(types.ADD_COMMENT_START);
  });
  it('should dispatch ADD_COMMENT_SUCCESS', () => {
    expect(actions.addCommentSuccess({}).type).toEqual(types.ADD_COMMENT_SUCCESS);
  });
  it('should dispatch ADD_COMMENT_FAIL', () => {
    expect(actions.addCommentFail({}).type).toEqual(types.ADD_COMMENT_FAIL);
  });
});


describe('Get Comment Actions Tests', () => {
  it('should dispatch GET_COMMENTS_START', () => {
    expect(actions.getArticleComments({}).type).toEqual(types.GET_COMMENTS_START);
  });
  it('should dispatch GET_COMMENTS_SUCCESS', () => {
    expect(actions.getCommentsSuccess({}).type).toEqual(types.GET_COMMENTS_SUCCESS);
  });
  it('should dispatch GET_COMMENTS_FAIL', () => {
    expect(actions.getCommentsFail({}).type).toEqual(types.GET_COMMENTS_FAIL);
  });
});

describe('Update Comment Actions Tests', () => {
  it('should dispatch UPDATE_COMMENTS_START', () => {
    expect(actions.updateArticleComment({}).type).toEqual(types.UPDATE_COMMENT_START);
  });
  it('should dispatch UPDATE_COMMENTS_SUCCESS', () => {
    expect(actions.updateCommentSuccess({}).type).toEqual(types.UPDATE_COMMENT_SUCCESS);
  });
  it('should dispatch UPDATE_COMMENTS_FAIL', () => {
    expect(actions.updateCommentFail({}).type).toEqual(types.UPDATE_COMMENT_FAIL);
  });
});


describe('Delete Comment Actions Tests', () => {
  it('should dispatch DELETE_COMMENT_START', () => {
    expect(actions.deleteArticleComment({}).type).toEqual(types.DELETE_COMMENT_START);
  });
  it('should dispatch DELETE_COMMENT_SUCCESS', () => {
    expect(actions.deleteCommentSuccess({}).type).toEqual(types.DELETE_COMMENT_SUCCESS);
  });
  it('should dispatch DELETE_COMMENT_FAIL', () => {
    expect(actions.deleteCommentFail({}).type).toEqual(types.DELETE_COMMENT_FAIL);
  });
});
