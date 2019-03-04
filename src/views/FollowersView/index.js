import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import FollowersComponent from '../../components/FollowersUser';
import { profileFollowData } from '../../redux/actions/userFollowActions/actions';

class FollowView extends Component {
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
    const { followers } = this.props;
    const userProfile = followers.profile;
    const { followers: userFollowers } = followers
    return (
      <FollowersComponent profile={userProfile} userFollowers={userFollowers} />
    );
  }
}

const mapStateToProps = state => ({
  followers: state.followUser,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    profileFollowData,
}, dispatch);

FollowView.propTypes = {
  profile: PropTypes.shape({}).isRequired,
  profileFollowData: PropTypes.shape({}).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FollowView);
