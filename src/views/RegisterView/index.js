import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import RegisterComponent from '../../components/Register';
import { registerUser } from '../../redux/actions/RegisterActions/actions';

class RegisterView extends Component {
  state = {
    email: '',
    username: '',
    password: '',
  };

  componentWillReceiveProps(nextProps) {
    const { register, history } = nextProps;
    if (register.success === true) {
      history.push('/login');
    }
  }

  componentWillReceiveProps(nextprops) {
    if (nextprops.register.success === true) {
      this.props.history.push('/login');
    }
  }

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (e) => {
    const { registerUser: registerAction } = this.props;
    const data = this.state;
    e.preventDefault();
    const registerData = {
      email: data.email,
      username: data.username,
      password: data.password,
    };
    registerAction(registerData);
  };

  render() {
    const current = this.props;
    return (
      <RegisterComponent
        onChange={this.onChange}
        handleSubmit={this.handleSubmit}
        registerSuccess={current.register}
        errors={current.register.errors ? current.register.errors : null}
        loading={current.register.isRegistering}
      />
    );
  }
}

RegisterView.propTypes = {
  registerUser: PropTypes.func.isRequired,
  register: PropTypes.shape({
    isRegistering: PropTypes.bool.isRequired,
    errors: PropTypes.array.isRequired,
  }).isRequired,
  history: PropTypes.shape({}).isRequired,
};

const mapStateToProps = ({ register }) => ({ register });

const mapDispatchToProps = dispatch => bindActionCreators({ registerUser }, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(RegisterView);
