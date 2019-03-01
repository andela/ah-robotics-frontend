import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as authActions from '../../redux/actions/socialAuth/SocialAuthActions';
import {
  auth,
  GoogleProvider,
  FacebookProvider,
  TwitterProvider,
} from '../../config/firebase';
import {
  FACEBOOK,
  GOOGLE,
  TWITTER,
} from '../../redux/actions/socialAuth/types';
import ButtonComponent from '../../components/common/SocialButton';

class SocialAuth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      providers: [
        {
          provider: FacebookProvider,
          type: FACEBOOK,
          name: 'facebook',
          class_name: 'facebook',
          icon: 'facebook f',
          color: 'vk',
        },
        {
          provider: GoogleProvider,
          type: GOOGLE,
          name: 'google-oauth2',
          class_name: 'google',
          icon: 'google',
          color: 'google plus',
        },
        {
          provider: TwitterProvider,
          type: TWITTER,
          name: 'twitter',
          class_name: 'twitter',
          icon: 'twitter',
          color: 'twitter',
        },
      ],
    };
  }

  componentWillReceiveProps(nextProps) {
    const { socialAuth } = nextProps;
    if (!socialAuth.isLoading && socialAuth.message === 'success') {
        window.location.assign('/');
    }
  }

  retrieveSocialData = (oauthprovider, platform, authType) => {
      auth
        .signInWithPopup(oauthprovider)
        .then(response => ({
            type: authType,
            payload: {
                authData: {
                    provider: platform,
                    accessToken: response.credential.accessToken,
                    accessSecret: response.credential.secret,
                },
                userDetails: {
                    name: response.user.displayName,
                    photo: response.user.photoURL,
                    email: response.user.email,
                },
            },
        }))
        .then((result) => {
            const { authData } = result.payload;
            const { userDetails } = result.payload;
            const tokenPayload = {};
            if (authData.provider === 'twitter') {
                tokenPayload.provider = authData.provider;
                tokenPayload.access_token = authData.accessToken;
                tokenPayload.access_token_secret = authData.accessSecret;
            } else {
                tokenPayload.provider = authData.provider;
                tokenPayload.access_token = authData.accessToken;
            }
            const { loginStart } = this.props;
            const payload = {};
            payload.authData = tokenPayload;
            payload.userDetails = userDetails;
            loginStart(payload);
        });
  }

  displaySocialLoginButtons = (providers, loading) => (
    <div>
      {providers.map(providerIdentity => (
        <ButtonComponent
          key={providerIdentity.name}
          Provider={providerIdentity.provider}
          providerName={providerIdentity.name}
          type={providerIdentity.type}
          className={providerIdentity.class_name}
          buttonClass={providerIdentity.button_class}
          loading={loading}
          retrieveSocialData={() => {
            this.retrieveSocialData(
              providerIdentity.provider,
              providerIdentity.name,
              providerIdentity.type,
            );
          }}
          icon={providerIdentity.icon}
          color={providerIdentity.color}
        />
      ))}
    </div>
  );

  render() {
    const { providers } = this.state;
    const { socialAuth } = this.props;
    const { isLoading } = socialAuth;
    return (
      <div>
        {(socialAuth.error) ? <p style={{ color: 'red' }}>{socialAuth.errors}</p> : null}
        <div>{this.displaySocialLoginButtons(providers, isLoading)}</div>
      </div>
    );
  }
}

SocialAuth.propTypes = {
  socialAuth: PropTypes.shape({}).isRequired,
  history: PropTypes.shape({}).isRequired,
  loginStart: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
        socialAuth: state.socialAuth,
});

const mapDispatchToProps = (dispatch) => {
    const actionCreators = {
        loginStart: data => dispatch(authActions.loginStart(data)),
    };
    return actionCreators;
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SocialAuth));
