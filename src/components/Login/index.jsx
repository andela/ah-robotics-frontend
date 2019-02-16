import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Button, Label, Message, Form, Image, Grid, Header, Segment,
} from 'semantic-ui-react';
import './login.scss';
import PropTypes from 'prop-types';
import logo from '../../logo.png';


// Create a login component view
// This code is a modification of the sample login page in Semantic UI
const LoginComponent = (
  { onChange, handleSubmit, login },
) => (
  <div className="login-form">
    <Grid textAlign="center" style={{ height: '100%' }} verticalAlign="middle">
      <Grid.Column className="form-container">
        <Image textAlign="center" src={logo} className="img-logo" alt="logo" />
        <Header as="h2" className="login-header" textAlign="center">
          Login
        </Header>
        {(login.errors.error) ? (<Message color="red" size="tiny">{login.errors.error}</Message>) : null}

        <Form size="large">
          <Segment basic>
            {(login.errors.email)
              ? <Label size="tiny" pointing="below" basic color="red">{login.errors.email}</Label> : null}
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              className="txt-login"
              name="email"
              placeholder="Email"
              transparent
              onChange={onChange}
            />
            <Form.Field>
              {(login.errors.password) ? <Label size="tiny" pointing="below" basic color="red">{login.errors.password}</Label> : null}
              <Form.Input
                transparent
                fluid
                className="txt-login"
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
                name="password"
                onChange={onChange}
              />
            </Form.Field>
            <br />
            <Button
              type="submit"
              loading={login.isLoading}
              className="btn-login bg-green"
              fluid
              size="medium"
              style={{ border: 30 }}
              onClick={handleSubmit}
            >
              Login
            </Button>
          </Segment>
        </Form>
        <br />
        <p>or log in with</p>
        <div>
          <Button circular color="vk" icon="facebook f" />
          <Button circular color="twitter" icon="twitter" />
          <Button circular color="google plus" icon="google" />
        </div>
        <br />
        <br />
        <p>
          Forgot
          <NavLink to="reset"> Password? Reset</NavLink>
        </p>
        <p>
          Dont have an account?
          <NavLink to="register"> Register</NavLink>
          {' '}

        </p>
      </Grid.Column>
    </Grid>
  </div>
);
LoginComponent.propTypes = {
  onChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  login: PropTypes.shape({}).isRequired,

};
export default LoginComponent;
