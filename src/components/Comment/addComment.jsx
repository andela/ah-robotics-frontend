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
  addArticleComment, getArticleComments,
} from '../../redux/actions/CommentActions/actions';

class AddCommentComponent extends Component {
  state = { body: '' };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (e) => {
    const {
      addArticleComment: addCommentAction,
      getArticleComments: getCommentsAction,
      match,
    } = this.props;
    const { slug } = match.params;
    e.preventDefault();
    const comment = { ...this.state };
    const data = { articleSlug: slug, commentDetails: comment };
    addCommentAction(data);
    this.setState({ body: '' });

    setTimeout(() => {
      getCommentsAction(data);
    }, 2000);
  };

  render() {
    const { addComment } = this.props;
    const { body } = this.state;
    return (
      <div id="add-comment-section">
        <Segment basic>
          <div>
            {addComment.errors.errors
            && (
              <Message color="red" size="tiny">
                {addComment.errors.errors.body[0] && 'Please provide a comment'}
              </Message>
            )}
          </div>
          <Form reply>
            <Form.TextArea
              onChange={this.onChange}
              name="body"
              id="comment-area"
              value={body}
              placeholder="Add a comment here..."
            />
            <Button
              id="comment-button"
              content="Add Comment"
              primary
              onClick={this.handleSubmit}
              loading={addComment.isCommenting}
            />
          </Form>
        </Segment>
      </div>
    );
  }
}

AddCommentComponent.propTypes = {
  addComment: PropTypes.shape.isRequired,
  addArticleComment: PropTypes.func.isRequired,
  getArticleComments: PropTypes.func.isRequired,
  match: PropTypes.shape.isRequired,
};

const mapStateToProps = ({ addComment, getComments }) => ({ addComment, getComments });

const mapDispatchToProps = dispatch => bindActionCreators({
  addArticleComment,
  getArticleComments,
}, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddCommentComponent));
