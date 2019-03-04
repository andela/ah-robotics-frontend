import React, { Component } from 'react';
import {
 Card, Comment, Label, Segment,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import SingleCommentComponent from './comment';
import './comment.scss';
import {
  getArticleComments,
} from '../../redux/actions/CommentActions/actions';


class CommentsListComponent extends Component {
  componentDidMount() {
    const {
      getArticleComments: getCommentsAction,
      match,
    } = this.props;
    const { slug } = match.params;
    const data = { articleSlug: slug };
    getCommentsAction(data);
  }

  render() {
    const { getComments, user, match } = this.props;
    const { slug } = match.params;
    const comments = getComments.comments.comment;
    const count = getComments.comments.commentsCount;
    const loading = getComments.isLoading;
    return (
      <Card id="comment-section">
        <div>
          <Segment basic loading={loading} size="large">
            <Card.Content>
              <Card.Header>
                <div id="comment-header-stuff">
                  <div id="comment-header-text">
                    <p>Comments</p>
                  </div>
                  <div id="comment-header-icon">
                    <Label circular size="large">
                      {(count) && `${count}`}
                    </Label>
                  </div>
                </div>
              </Card.Header>
            </Card.Content>
          </Segment>
          <Card.Content>
            <Comment.Group id="comment-list-section">
              <Segment basic loading={loading}>
                {comments && comments.map(comment => (
                (
                  <SingleCommentComponent
                    comment={comment}
                    key={comment.id}
                    article={slug}
                    user={user}
                  />
                )
              ))}
              </Segment>
            </Comment.Group>
          </Card.Content>
        </div>
      </Card>
    );
  }
}

CommentsListComponent.propTypes = {
  getArticleComments: PropTypes.func.isRequired,
  getComments: PropTypes.shape.isRequired,
  match: PropTypes.shape.isRequired,
  user: PropTypes.shape.isRequired,
};

const mapStateToProps = ({ getComments }) => ({ getComments });

const mapDispatchToProps = dispatch => bindActionCreators({ getArticleComments }, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommentsListComponent));
