import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import NewPasswordComponent from "../../components/newPassword";
import { newPasswordStart } from '../../redux/actions/newPasswordActions/actions';

export class NewPasswordView extends Component {
  state = {
    password: ''
  };

  componentWillReceiveProps(nextprops) {
    if (nextprops.newPassword.success === true) {
      setInterval(()=>{this.props.history.push("/login")}, 3000)
    }
  }

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (e) => {
    const { newPasswordStart: newPasswordAction } = this.props;

    e.preventDefault();

    const data = {
      ...this.state,
      token: this.props.match.params.token
    };

    //console.log(data)
    newPasswordAction(data);
  };
  render() {
    return (
      <NewPasswordComponent onChange={this.onChange} handleSubmit={this.handleSubmit} newPassword={this.props.newPassword ? this.props.newPassword : null}/>
    )
  }
}
const mapStateToProps = (state) => ({
  newPassword: state.newPassword

});

const mapDispatchToProps = dispatch => bindActionCreators({
  newPasswordStart
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(NewPasswordView);