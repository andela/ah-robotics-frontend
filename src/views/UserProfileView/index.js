import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Message } from 'semantic-ui-react';
import ProfileComponent from '../../components/Profile';
import { profileData } from '../../redux/actions/userProfileActions/actions';
import { profileFollowPostStart, userUnfollowStart } from '../../redux/actions/UserFollowActions/actions';

class ProfileView extends Component {
  state = { };

  componentDidMount() {
    // console.log(this.props);
    const { match } = this.props;
    const { username: userName } = match.params;
      const payload = {};
      if (!userName) {
      const user = JSON.parse(localStorage.getItem('user'));
      const { username } = user;
      payload.username = username;
      const { profileData: profileAction } = this.props;
      profileAction(payload);
    } else {
      payload.username = userName;
      const { profileData: profileAction } = this.props;
      profileAction(payload);
    }
  }

  handleFollow = () => {
    const { profile } = this.props;
    const { profileFollowPostStart: followAction } = this.props;
    followAction(profile.profile.username);
  };

  handleUnfollow = () => {
    const { profile } = this.props;
    const { userUnfollowStart: unfollowAction } = this.props;
    unfollowAction(profile.profile.username);
  }

  render() {
    const { profile } = this.props;
    const userProfile = profile.profile;
    const { followUser } = this.props;
    return (
      profile.isLoading
          ? <h1>loading</h1>
          : (
            profile.errors ? <Message color="red">{profile.errors && profile.errors.errors.error}</Message>
            : (
              <ProfileComponent
                profile={userProfile}
                handleFollow={this.handleFollow}
                handleUnfollow={this.handleUnfollow}
                followUser={followUser}
              />
            )
            )
    );
  }
}

const mapStateToProps = state => ({
  profile: state.userProfile,
  followUser: state.followUser,
});
const mapDispatchToProps = dispatch => bindActionCreators({
  profileData,
  profileFollowPostStart,
  userUnfollowStart,
}, dispatch);

ProfileView.propTypes = {
  profile: PropTypes.shape({}).isRequired,
  profileData: PropTypes.shape({}).isRequired,
  profileFollowPostStart: PropTypes.shape({}).isRequired,
  followUser: PropTypes.shape({}).isRequired,
  userUnfollowStart: PropTypes.shape({}).isRequired,
  match: PropTypes.shape({}).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileView);
