import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { NewPasswordComponent } from '../../components/newPassword/index';
import { newPasswordStart } from '../../redux/actions/newPasswordActions/actions';

export class NewPasswordView extends Component {
  state = {
    password: '',
  };

  componentWillReceiveProps(nextProps) {
    const { history, newPassword } = nextProps;
    if (newPassword.success === true) {
      setInterval(() => {
       history.push('/login');
      }, 3000);
    }
  }

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (e) => {
    const { newPasswordStart: newPasswordAction } = this.props;

    e.preventDefault();
    const { match } = this.props;

    const data = {
      ...this.state,
      token: match.params.token,
    };

    newPasswordAction(data);
  };

  render() {
    const { newPassword } = this.props;
    return (
      <NewPasswordComponent
        onChange={this.onChange}
        handleSubmit={this.handleSubmit}
        response={newPassword}
      />
      );
  }
}
const mapStateToProps = state => ({
  newPassword: state.newPassword,

});

const mapDispatchToProps = dispatch => bindActionCreators({
  newPasswordStart,
}, dispatch);

NewPasswordView.propTypes = {
  newPassword: PropTypes.func.isRequired,
  history: PropTypes.shape({}).isRequired,
  newPasswordStart: PropTypes.func.isRequired,
  match: PropTypes.shape({}).isRequired,
  };

export default connect(mapStateToProps, mapDispatchToProps)(NewPasswordView);
