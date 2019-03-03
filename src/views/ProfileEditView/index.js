import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ProfileEditComponent from '../../components/Profile/ProfileEdit';
import { profileUpdate, userImageUpload } from '../../redux/actions/userProfileActions/actions';

class profileEditView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bio: '',
      image: '',
    };
  }


  componentWillReceiveProps(nextProps) {
    nextProps.history.push('/profiles');
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onImageChange = (event) => {
    this.setState({
          [event.target.name]: event.target.files[0],
        },
        () => {
          const imageData = {};
          const { image } = this.state;
          imageData.data = { image };
          const user = JSON.parse(localStorage.getItem('user'));
          const token = localStorage.getItem('accessToken');
          const { username } = user;
          imageData.token = token;
          imageData.username = username;
          const { userImageUpload: uploadImage } = this.props;
          uploadImage(imageData);
        });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { profileUpdate: profileUpdateAction } = this.props;
    const user = JSON.parse(localStorage.getItem('user'));
    const { username } = user;
    const updateData = {};
    const { bio } = this.state;
    updateData.data = { bio };
    updateData.username = username;
    profileUpdateAction(updateData);
  };

  render() {
    const { profile } = this.props;
    const userprofile = profile.profile;
    return (
      <ProfileEditComponent
        userProfile={userprofile}
        profile={profile}
        handleSubmit={this.handleSubmit}
        onChange={this.onChange}
        onImageChange={this.onImageChange}
      />
    );
  }
}
profileEditView.propTypes = {
  profile: PropTypes.shape({}).isRequired,
  profileUpdate: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  userImageUpload: PropTypes.shape({}).isRequired,
};

const mapStateToProps = state => ({
  profile: state.userProfile,
});

const mapDispatchToprops = dispatch => bindActionCreators({
  profileUpdate, userImageUpload,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToprops)(profileEditView);
