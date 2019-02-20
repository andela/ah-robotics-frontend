import React from 'react';
import {
  Button, Form, Image, Grid, Header, Segment, Label, Message,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import '../Login/login.scss';
import logo from './logo.png';

const RegisterComponent = ({
  onChange, handleSubmit, errors, loading, registerSuccess,
}) => (
  <div className="login-form">
    <Grid textAlign="center" style={{ height: '100%' }} verticalAlign="middle">
      <Grid.Column className="form-container">
        <Image src={logo} className="img-logo" alt="logo" />
        <Header as="h2" className="login-header">Register</Header>
        {registerSuccess.success === true && (
          <Message
            color="success"
            size="tiny"
            content={registerSuccess.user.message}
          />
        )}
        <Form size="large">
          <Segment basic>
            {(errors ? (
              errors.email
            ) : null) ? (
              <Label size="tiny" pointing="below" basic color="red">
                {errors.email}
              </Label>
            ) : null}
            <Form.Input
              transparent
              fluid
              placeholder="Email"
              onChange={onChange}
              name="email"
              icon="mail"
              iconPosition="left"
            />
            {(errors ? (
              errors.username
            ) : null) ? (
              <Label size="tiny" pointing="below" basic color="red">
                {errors.username}
              </Label>
            ) : null}
            <Form.Input
              transparent
              fluid
              placeholder="Username"
              onChange={onChange}
              name="username"
              icon="user"
              iconPosition="left"
            />
            {(errors ? (
              errors.password
            ) : null) ? (
              <Label size="tiny" pointing="below" basic color="red">
                {errors.password}
              </Label>
            ) : null}
            <Form.Input
              transparent
              fluid
              placeholder="Password"
              onChange={onChange}
              type="password"
              name="password"
              icon="lock"
              iconPosition="left"
            />
            <Form.Input
              transparent
              fluid
              placeholder="Confirm Password"
              onChange={onChange}
              type="password"
              name="confirmPassword"
              icon="lock"
              iconPosition="left"
            />
            <br />
            <Button
              id="btn-register"
              fluid
              size="large"
              loading={loading}
              onClick={handleSubmit}
              className="btn-login bg-green"
            >
              Register
            </Button>
          </Segment>
        </Form>
        <p>
          Already have an account?
          <a href="/login"> Login</a>
        </p>
      </Grid.Column>
    </Grid>
  </div>
);

RegisterComponent.propTypes = {
  onChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  errors: PropTypes.shape({}).isRequired,
  loading: PropTypes.bool.isRequired,
  registerSuccess: PropTypes.shape({}).isRequired,
};

export default RegisterComponent;
