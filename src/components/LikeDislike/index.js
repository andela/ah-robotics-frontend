import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon, Message } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { articleFetch } from '../../redux/actions/ArticleActions/actions';
import {
  dislikeRequest,
  likeRequest,
} from '../../redux/actions/LikeDislikeActions/actions';
import './likedislike.scss';

class LikeDislikeComponent extends Component {
  // state = {
  //   loggedIn: false,
  // }

  handleLike = (e) => {
    e.preventDefault();
    if (this.props.login.isAuthenticated) {
      // return(
      //   <div>
      //     <Message color="red">
      //       <p>Please login to like</p>
      //     </Message>
      //   </div>
      // )
      this.setState({loggedIn: true});
    }
    const {
      likeRequest: likeAction,
      articleFetch: getArticle,
      slug,
    } = this.props;
    const data = { slug };
    likeAction(data);

    setTimeout(() => {
      getArticle(data);
    }, 500);
  };



  handleDislike = (e) => {
    if (this.props.login.isAuthenticated) {
      this.setState({loggedIn: true});
    }
    e.preventDefault();
    const {
      dislikeRequest: disLikeAction,
      articleFetch: getArticle,
      slug,
    } = this.props;
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
      <div>
        <span id="like-dislike-btn">
          <Icon
            id={likeStatus !== true ? 'thumbs-up' : 'thumbs-up-active'}
            className="thumbs up"
            onClick={this.handleLike}
          />
          <p>{likes}</p>
          <Icon
            id={dislikeStatus !== true ? 'thumbs-down' : 'thumbs-down-active'}
            className="thumbs down"
            onClick={this.handleDislike}
          />
          <p>{dislikes}</p>
        </span>
      </div>

    );
  }
}

const mapStateToProps = ({ like, dislike, login}) => ({ like, dislike, login});

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
