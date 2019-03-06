import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { articleFetch } from '../../redux/actions/ArticleActions/actions';
import {
  dislikeRequest,
  likeRequest,
} from '../../redux/actions/LikeDislikeActions/actions';
import './likedislike.scss';

class LikeDislikeComponent extends Component {
  handleLike = (e) => {
    const {
      likeRequest: likeAction,
      articleFetch: getArticle,
      slug,
    } = this.props;
    e.preventDefault();
    const data = { slug };
    likeAction(data);

    setTimeout(() => {
      getArticle(data);
    }, 500);
  };

  handleDislike = (e) => {
    const {
      dislikeRequest: disLikeAction,
      articleFetch: getArticle,
      slug,
    } = this.props;
    e.preventDefault();
    const data = { slug };
    disLikeAction(data);

    setTimeout(() => {
      getArticle(data);
    }, 500);
  };

  render() {
    const {
      likes, dislikes, likeStatus, dislikeStatus,
    } = this.props;

    return (
      <div id="like-dislike-section">
        {/* <div id="like-dislike-error"> */}
        {/* <Message negative> */}
        {/* <p id="like-error-text">Login to Like and Dislike Articles</p> */}
        {/* </Message> */}
        {/* </div> */}
        <div id="like-dislike-icons">
          <div id="like-dislike-item">
            <Icon
              id={likeStatus !== true ? 'thumbs-up' : 'thumbs-up-active'}
              className="thumbs up"
              onClick={this.handleLike}
            />
            <p>{likes}</p>
          </div>
          <div id="like-dislike-item">
            <Icon
              id={dislikeStatus !== true ? 'thumbs-down' : 'thumbs-down-active'}
              className="thumbs down"
              onClick={this.handleDislike}
            />
            <p>{dislikes}</p>
          </div>
        </div>
      </div>

    );
  }
}

const mapStateToProps = ({ like, dislike }) => ({ like, dislike });

const mapDispatchToProps = dispatch => bindActionCreators({
  articleFetch,
  likeRequest,
  dislikeRequest,
}, dispatch);

LikeDislikeComponent.propTypes = {
  likeRequest: PropTypes.func.isRequired,
  dislikeRequest: PropTypes.func.isRequired,
  slug: PropTypes.func.isRequired,
  likes: PropTypes.instanceOf(Number).isRequired,
  dislikes: PropTypes.instanceOf(Number).isRequired,
  likeStatus: PropTypes.bool.isRequired,
  dislikeStatus: PropTypes.bool.isRequired,
  articleFetch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(LikeDislikeComponent);
