import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NavigationComponent from '../../components/Navigation';

class NavigationView extends Component {
  render() {
    const { login } = this.props;
    return (
      <NavigationComponent isAuthenticated={login.isAuthenticated} />
    );
}
}
const mapStateToProps = ({ login }) => ({
  login,
});
NavigationView.propTypes = {
  login: PropTypes.shape({}).isRequired,
};
export default connect(mapStateToProps)(NavigationView);
