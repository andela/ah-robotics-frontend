import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import ProfileComponent from '../../components/Profile';
import { profileData } from '../../redux/actions/userProfileActions/actions';

class ProfileView extends Component {
  state = { };

  componentDidMount() {
    const user = JSON.parse(localStorage.getItem('user'));
    const payload = {};
    const { username } = user;
    payload.username = username;
    const { profileData: profileAction } = this.props;
    profileAction(payload);
  }

  componentWillReceiveProps(nextProps) {

  }

  render() {
    const { profile } = this.props;
    const userProfile = profile.profile;
    return (
      profile.isLoading
          ? <h1>loading</h1>
          : <ProfileComponent profile={userProfile} />
    );
  }
}

const mapStateToProps = state => ({
  profile: state.userProfile,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  profileData,
}, dispatch);

ProfileView.propTypes = {
  profile: PropTypes.shape({}).isRequired,
  profileData: PropTypes.shape({}).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileView);
