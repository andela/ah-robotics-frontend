import React from 'react';
import {
  Button, Form, Image, Grid, Header, Segment,
}
  from 'semantic-ui-react';
import './newpassword.scss';
import PropTypes from 'prop-types';
import logo from './logo.png';


const NewPasswordComponent = ({ onChange, handleSubmit, response }) => (
  <div className="login-form">
    <Grid textAlign="center" style={{ height: '100%' }} verticalAlign="middle">
      <Grid.Column className="form-container">
        <Image textAlign="center" src={logo} className="img-logo" alt="logo" />
        <Header as="h2" className="login-header" textAlign="center">
            Reset Password
        </Header>

        <Form size="large">
          <Segment basic>
            {(response.errors) ? (
              (response.errors.errors)
                ? <p style={{ color: 'red' }}>{response.errors.errors.password[0]}</p>
                : <p style={{ color: 'red' }}>{response.errors.message}</p>
            ) : (
              <p style={{ color: '#00d0a0' }}>{response.message}</p>
            )}

            <br />
            <Form.Input
              transparent
              fluid
              placeholder="New Password"
              onChange={onChange}
              type="password"
              name="password"
            />
            <br />
            <Form.Input
              transparent
              fluid
              placeholder="Confirm Password"
              onChange={onChange}
              type="password"
              name="confirm_password"
            />
            <br />
            <Button type="submit" id="btn-fix" className="btn-login" fluid size="large" loading={response.isResetting} style={{ border: 30 }} onClick={handleSubmit}>
            Reset Password
            </Button>
          </Segment>
        </Form>
        <br />
      </Grid.Column>
    </Grid>
  </div>
);

NewPasswordComponent.propTypes = {
  onChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  response: PropTypes.shape({}).isRequired,
};

export default NewPasswordComponent;
