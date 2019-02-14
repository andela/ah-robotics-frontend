import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import LoginComponent from '../../components/Login';
import { loginUser } from '../../redux/actions/LoginActions/actions';

class LoginView extends Component {
  state = { email: '', password: '' };

  componentDidMount() {
    this.setState({ login: { success: false } });
  }

  componentWillReceiveProps(nextProps) {
    const { login, history } = nextProps;
    if (login.success) {
      setTimeout(() => {
        history.push('/');
      }, 800);
    }
  }

  handleSubmit = (e) => {
    const { loginUser: loginAction } = this.props;
    e.preventDefault();
    const data = {
      ...this.state,
    };
    loginAction(data);
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { login } = this.props;
    return (
      <LoginComponent
        onChange={this.onChange}
        handleSubmit={this.handleSubmit}
        login={login}
      />
    );
  }
}

LoginView.propTypes = {
  loginUser: PropTypes.func.isRequired,
  login: PropTypes.shape({}).isRequired,
  history: PropTypes.shape({}).isRequired,
};

const mapStateToProps = ({ login }) => ({
  login,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  loginUser,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LoginView);
