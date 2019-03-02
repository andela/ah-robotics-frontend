import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import FollowingComponent from '../../components/FollowingUser';
import { profileFollowData } from '../../redux/actions/userFollowActions/actions'

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
    return (
      following.isLoading
          ? <h1>loading</h1>
          : <FollowingComponent following={userProfile} />
    );
  }
}

const mapStateToProps = state => ({
  following: state.userProfile,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    profileFollowData,
}, dispatch);

FollowingView.propTypes = {
  profile: PropTypes.shape({}).isRequired,
  profileFollowData: PropTypes.shape({}).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FollowingView);
