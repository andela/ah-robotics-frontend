import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import VerifyRegistrationComponent from '../../components/VerifyRegistration';
import { verifyUser } from '../../redux/actions/VerifyRegistrationActions/actions';

class VerifyRegistrationView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      verified: false,
      message: '',
      errors: {},
    };
  }


  componentDidMount() {
      const { verifyUser: verifyAction } = this.props;
      const token = this.props.match.params.token;
      verifyAction({ token });
  }


  render() {
    const loading = this.props.verify.isVerifying;
    return (
      <VerifyRegistrationComponent
        verifyUser={this.props.verify}
        loading={loading}
      />
    );
  }
}

const mapStateToProps = state => ({
    verify: state.verifyUser,
  });

const mapDispatchToProps = dispatch => bindActionCreators({ verifyUser }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(VerifyRegistrationView);
