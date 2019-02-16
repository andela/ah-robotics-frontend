<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import VerifyRegistrationComponent from '../../components/VerifyRegistration';
import { verifyUser } from '../../redux/actions/VerifyRegistrationActions/actions';

class VerifyRegistrationView extends React.Component {
<<<<<<< HEAD
  componentDidMount() {
      const { verifyUser: verifyAction } = this.props;
      const { match } = this.props;
      const { token } = match.params;
      verifyAction({ token });
  }


  render() {
    const current = this.props;
    return (
      <VerifyRegistrationComponent
        verifyUser={current.verify}
        loading={current.verify.isVerifying}
=======
import React from "react";
import {connect} from "react-redux";
import VerifyRegistrationComponent from "../../components/VerifyRegistration";
import {verifyUser} from "../../redux/actions/VerifyRegistrationActions/actions";
import {bindActionCreators} from "redux";
=======
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import VerifyRegistrationComponent from '../../components/VerifyRegistration';
import { verifyUser } from '../../redux/actions/VerifyRegistrationActions/actions';
>>>>>>> feat(register): add more tests

class VerifyRegistrationView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      verified: false,
      message: '',
      errors: {},
    };
  }


=======
>>>>>>> feat(register): refactor code
  componentDidMount() {
      const { verifyUser: verifyAction } = this.props;
      const { match } = this.props;
      const { token } = match.params;
      verifyAction({ token });
  }


  render() {
    const current = this.props;
    return (
      <VerifyRegistrationComponent
<<<<<<< HEAD
        verifyUser={this.props.verify}
        loading={loading}
>>>>>>> feat(register): add email verification functionality
=======
        verifyUser={current.verify}
        loading={current.verify.isVerifying}
>>>>>>> feat(register): refactor code
      />
    );
  }
}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> feat(register): refactor code
VerifyRegistrationView.propTypes = {
  verifyUser: PropTypes.func.isRequired,
  verify: PropTypes.shape({
    isVerifying: PropTypes.bool.isRequired,
    errors: PropTypes.array.isRequired,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      token: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

<<<<<<< HEAD
const mapStateToProps = state => ({
    verify: state.verifyUser,
  });

const mapDispatchToProps = dispatch => bindActionCreators({ verifyUser }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
=======
const mapStateToProps = state => {
  return {
    verify: state.verifyUser
  };
};
=======
=======
>>>>>>> feat(register): refactor code
const mapStateToProps = state => ({
    verify: state.verifyUser,
  });
>>>>>>> feat(register): add more tests

const mapDispatchToProps = dispatch => bindActionCreators({ verifyUser }, dispatch);

export default connect(
  mapStateToProps,
<<<<<<< HEAD
  mapDispatchToProps
>>>>>>> feat(register): add email verification functionality
=======
  mapDispatchToProps,
>>>>>>> feat(register): add more tests
)(VerifyRegistrationView);
