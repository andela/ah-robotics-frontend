import React from 'react';
import { Button, Form, Image, Grid, Header, Segment } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import './resetpassword.scss';
import logo from './logo.png';


const ResetPasswordComponent = ({ onChange, handleSubmit, response }) => (
  <div className='login-form'>
    <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
      <Grid.Column className='form-container' >
        <Image textAlign='center' src={logo} className="img-logo" alt="logo" />
        <Header as='h2' className='login-header' textAlign='center'>
          Reset Password
        </Header>
        <p textAlign='center' id='requirement-text' fluid>Enter your email address below and we'll send you a link to reset your password</p>
        <Form size='large'>
          <Segment basic>
            {(response.errors) ? (
              <p style={{ color: 'red' }}>{response.errors[0]}</p>
            ) : (
              <p style={{ color: '#00d0a0' }}>Success! {response.message}</p>
            )}
            <Form.Input fluid className='txt-login' placeholder='Email address' transparent onChange={onChange} name="email" />
            <br />
            <Button type="submit" id='btn-fix' className='btn-login' loading={response.isReseting} fluid size='large' style={{ border: 30 }} onClick={handleSubmit}>
              Reset Password
            </Button>
          </Segment>
        </Form>
        <br />

        <p id='return-text'><NavLink to='/login'> Log In</NavLink> or<NavLink to='/login'> Sign Up</NavLink> </p>
      </Grid.Column>
    </Grid>
  </div>
);

export default ResetPasswordComponent;
