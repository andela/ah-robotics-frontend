import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Button, Form, Message, Segment,
} from 'semantic-ui-react';
import './comment.scss';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import {
  getArticleComments,
  updateArticleComment,
} from '../../redux/actions/CommentActions/actions';

class UpdateCommentComponent extends Component {
  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleUpdate = (e) => {
    const {
      updateArticleComment: updateCommentAction,
      getArticleComments: getCommentsAction,
      commentId, handleClose, articleSlug,
    } = this.props;
    e.preventDefault();
    const comment = { ...this.state };
    const data = {
      articleSlug,
      commentId,
      commentDetails: comment,
    };
    updateCommentAction(data);
    handleClose();
    setTimeout(() => {
      getCommentsAction(data);
    }, 2000);
  };

  render() {
    const { updateComment, commentDetails, handleClose } = this.props;
    return (
      <div id="update-comment-section">
        <Segment basic>
          <div>
            {updateComment.errors.errors
            && (
              <Message color="red" size="tiny">
                {updateComment.errors.errors.body[0] && 'Please provide a comment'}
              </Message>
            )}
          </div>
          <Form reply>
            <div id="update-text-section">
              <p id="delete-popup-text">Update Comment ?</p>
            </div>
            <Form.TextArea
              onChange={this.onChange}
              name="body"
              id="update-comment-area"
              placeholder="Update a comment here..."
            >
              {commentDetails}
            </Form.TextArea>
            <Button.Group>
              <Button
                id="cancel-comment-button"
                content="Cancel"
                primary
                onClick={handleClose}
              />
              <Button
                id="update-popup-button"
                content="Update"
                primary
                onClick={this.handleUpdate}
                loading={updateComment.isUpdating}
              />
            </Button.Group>
          </Form>
        </Segment>
      </div>
    );
  }
}

UpdateCommentComponent.propTypes = {
  updateComment: PropTypes.shape.isRequired,
  updateArticleComment: PropTypes.func.isRequired,
  getArticleComments: PropTypes.func.isRequired,
  commentId: PropTypes.number.isRequired,
  commentDetails: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired,
  articleSlug: PropTypes.shape.isRequired,
};

const mapStateToProps = ({ updateComment, getComments }) => ({ updateComment, getComments });

const mapDispatchToProps = dispatch => bindActionCreators({
  updateArticleComment,
  getArticleComments,
}, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UpdateCommentComponent));
