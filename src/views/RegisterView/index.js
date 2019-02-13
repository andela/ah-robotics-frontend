import React from 'react';
import { connect } from 'react-redux';
import RegisterComponent from '../../components/Register';
import { registerUser } from '../../redux/actions/RegisterActions/actions';
import { bindActionCreators } from 'redux';

class RegisterView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
      errors: {}
    };
    // this.onChange = this.onChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
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
    console.log(registerData);

    registerAction(registerData);

  }
  render() {
    return (
      <RegisterComponent onChange={this.onChange} handleSubmit={this.handleSubmit} errors={this.props.register} />
    );
  }
}

const mapStateToProps = state => {
  return {
    register: state.register,
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({ registerUser }, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(RegisterView);
