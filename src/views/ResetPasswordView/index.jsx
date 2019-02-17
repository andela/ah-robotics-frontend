import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ResetPasswordComponent from '../../components/resetPassword';
import { resetPasswordUser } from '../../redux/actions/resetPasswordActions/resetPasswordActions';

export class ResetPasswordView extends Component {
  state = {
    email: ''
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (e) => {
    const { resetPasswordUser: resetPasswordAction } = this.props;

    e.preventDefault();

    const data = {
      ...this.state
    };
    resetPasswordAction(data);
  };
  render() {
    return (
      <ResetPasswordComponent onChange={this.onChange} handleSubmit={this.handleSubmit} response={this.props.resetPassword}/>
    )
  }
}
const mapStateToProps = ({resetPassword}) => ({
  resetPassword

});

const mapDispatchToProps = dispatch => bindActionCreators({
  resetPasswordUser
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(ResetPasswordView);
