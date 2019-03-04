import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import FollowingComponent from '../../components/FollowingUser';
import { profileFollowData } from '../../redux/actions/userFollowActions/actions';

class FollowingView extends Component {
  state = { };

  componentDidMount() {
    const user = JSON.parse(localStorage.getItem('user'));
    const payload = {};
    const { username } = user;
    payload.username = username;
    const { profileFollowData: followAction } = this.props;
    followAction(payload);
  }

  render() {
    const { following } = this.props;
    const userProfile = following.profile;
    const { following: followingUsers } = following;
    return (
      <FollowingComponent following={userProfile} followingUsers={followingUsers} />
    );
  }
}

const mapStateToProps = state => ({
  following: state.followUser,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    profileFollowData,
}, dispatch);

FollowingView.propTypes = {
  profile: PropTypes.shape({}).isRequired,
  profileFollowData: PropTypes.shape({}).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FollowingView);
