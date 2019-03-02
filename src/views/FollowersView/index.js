import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import FollowersComponent from '../../components/FollowersUser';
import { profileFollowData } from '../../redux/actions/userFollowActions/actions'

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
    const { profile } = this.props;
    const userProfile = profile.profile;
    return (
      profile.isLoading
          ? <h1>loading</h1>
          : <FollowersComponent profile={userProfile} />
    );
  }
}

const mapStateToProps = state => ({
  profile: state.userProfile,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    profileFollowData,
}, dispatch);

FollowView.propTypes = {
  profile: PropTypes.shape({}).isRequired,
  profileFollowData: PropTypes.shape({}).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FollowView);
