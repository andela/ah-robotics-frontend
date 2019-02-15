import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import RegisterComponent from '../../components/Register';
import { registerUser } from '../../redux/actions/RegisterActions/actions';

class RegisterView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
      errors: {},
    };
    // this.onChange = this.onChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextprops) {
    if (nextprops.register.success === true) {
      this.props.history.push('/login');
    }
  }

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = (e) => {
    const { registerUser: registerAction } = this.props;
    e.preventDefault();
    const registerData = {
      email: this.state.email,
      username: this.state.username,
      password: this.state.password,
    };
    registerAction(registerData);
  }

  render() {
    const loading = this.props.register.isRegistering;
    return (
      <RegisterComponent
        onChange={this.onChange}
        handleSubmit={this.handleSubmit}
        registerSuccess={this.props.register}
        errors={this.props.register.errors ? this.props.register.errors : null}
        loading={loading}
      />
    );
  }
}

const mapStateToProps = state => ({
    register: state.register,
  });

const mapDispatchToProps = dispatch => bindActionCreators({ registerUser }, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(RegisterView);
