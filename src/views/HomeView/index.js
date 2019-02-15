import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import HomeComponent from '../../components/Home/index';

class HomeView extends Component {
  render() {
    const { login } = this.props;
    return (
      <HomeComponent user={login.user} />
    );
  }
}

const mapStateToProps = ({ login }) => ({
  login,
});

HomeView.propTypes = {
  login: PropTypes.shape({}).isRequired,
};
export default connect(mapStateToProps)(HomeView);
