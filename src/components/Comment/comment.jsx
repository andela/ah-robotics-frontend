import React, { Component } from 'react';
import {
  Button, Comment, Form, Popup,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './comment.scss';
import UpdateCommentComponent from './updateComment';
import {
  deleteArticleComment, getArticleComments,
} from '../../redux/actions/CommentActions/actions';

class SingleCommentComponent extends Component {
  state = { isUpdatePopUpOpen: false, isDeletePopUpOpen: false };

  handleUpdateOpen = () => {
    this.setState({ isUpdatePopUpOpen: true, isDeletePopUpOpen: false });
  };

  handleDeleteOpen = () => {
    this.setState({ isUpdatePopUpOpen: false, isDeletePopUpOpen: true });
  };

  handleUpdateClose = () => {
    this.setState({ isUpdatePopUpOpen: false, isDeletePopUpOpen: false });
  };

  handleDeleteClose = () => {
    this.setState({ isUpdatePopUpOpen: false, isDeletePopUpOpen: false });
  };

  handleDelete = (e) => {
    const {
      deleteArticleComment: deleteCommentAction,
      getArticleComments: getCommentsAction,
      comment, article,
    } = this.props;

    const data = { articleSlug: article, commentId: comment.id };

    deleteCommentAction(data);
    setTimeout(() => {
      getCommentsAction(data);
    }, 2000);
  };

  render() {
    const {
      comment, user, deleteComment, article,
    } = this.props;
    const { isUpdatePopUpOpen, isDeletePopUpOpen } = this.state;
    return (
      <Comment id="comment-detail">
        <Comment.Avatar src={comment.author.image} />
        <Comment.Content>
          <Comment.Author as="a">{`${comment.author.username}`}</Comment.Author>
          <Comment.Metadata>
            <div>{`${moment(comment.created_at).fromNow()}`}</div>
          </Comment.Metadata>
          <Comment.Text>
            <p>{`${comment.body}`}</p>
          </Comment.Text>
          <Comment.Actions>
            {comment.author.username === user.username ? (
              <Popup
                id="update-comment-body"
                trigger={<Comment.Action>Update</Comment.Action>}
                content={(
                  <UpdateCommentComponent
                    commentId={comment.id}
                    commentDetails={comment.body}
                    handleClose={this.handleUpdateClose}
                    articleSlug={article}
                  />
                )}
                on="click"
                open={isUpdatePopUpOpen}
                onClose={this.handleClose}
                onOpen={this.handleUpdateOpen}
                verticalOffset={45}
                position="top left"
              />
            ) : null}
            {comment.author.username === user.username ? (
              <Popup
                id="delete-comment-body"
                trigger={<Comment.Action>Delete</Comment.Action>}
                content={(
                  <Form reply>
                    <div id="delete-text-section">
                      <p id="delete-popup-text">Delete Comment ?</p>
                    </div>
                    <Button.Group>
                      <Button
                        id="cancel-comment-button"
                        content="Cancel"
                        primary
                        onClick={this.handleDeleteClose}
                      />
                      <Button
                        id="delete-comment-button"
                        content="Delete"
                        primary
                        onClick={this.handleDelete}
                        loading={deleteComment.isDeleting}
                      />
                    </Button.Group>
                  </Form>
                )}
                on="click"
                open={isDeletePopUpOpen}
                onClose={this.handleDeleteClose}
                onOpen={this.handleDeleteOpen}
                verticalOffset={45}
                position="top left"
              />
            ) : null}
          </Comment.Actions>
        </Comment.Content>
      </Comment>
    );
  }
}

SingleCommentComponent.propTypes = {
  comment: PropTypes.shape({}).isRequired,
  user: PropTypes.shape({}).isRequired,
  deleteArticleComment: PropTypes.func.isRequired,
  article: PropTypes.string.isRequired,
  deleteComment: PropTypes.shape({}).isRequired,
  getArticleComments: PropTypes.func.isRequired,
};

const mapStateToProps = ({ deleteComment, getComments }) => ({ deleteComment, getComments });

const mapDispatchToProps = dispatch => bindActionCreators({
  deleteArticleComment,
  getArticleComments,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SingleCommentComponent);
