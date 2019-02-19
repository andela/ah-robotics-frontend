import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import VerifyRegistrationComponent from '../../components/VerifyRegistration';
import { verifyUser } from '../../redux/actions/VerifyRegistrationActions/actions';

class VerifyRegistrationView extends React.Component {
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
      />
    );
  }
}

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

const mapStateToProps = state => ({
    verify: state.verifyUser,
  });

const mapDispatchToProps = dispatch => bindActionCreators({ verifyUser }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(VerifyRegistrationView);
