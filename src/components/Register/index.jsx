import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Button, Form, Image, Grid, Header, Segment, Sticky, Divider} from 'semantic-ui-react';
import './register.scss';
import logo from './logo.png';
import NavigationComponent from '../../components/Navigation/';

// Create a Register component view
// This code is a modification of the sample login page in Semantic UI
const RegisterComponent = ({ onChange, handleSubmit, errors, loading }) => {
  return (
    <div className='login-form'>
      <Grid textAlign='center' style={{height: '100%'}} verticalAlign='middle'>
        <Grid.Column className='form-container'>
          <Image src={logo} alt="logo"/>
          <Header as='h2'>Register</Header>
          <Form size='large'>
            <Segment basic>
              <p style={{ color: 'red' }}>{(errors) ? errors.email : null}</p> 
              <Form.Input transparent fluid placeholder='Email' onChange={onChange} name="email"/>
              <p style={{ color: 'red' }}>{(errors) ? errors.username : null}</p>
              <Form.Input transparent fluid placeholder='Username' onChange={onChange} name="username"/>
              <p style={{ color: 'red' }}>{(errors) ? errors.password : null}</p>
              <Form.Input transparent fluid placeholder='Password' onChange={onChange} type='password' name="password"/>
              <Form.Input transparent fluid placeholder='Confirm Password' onChange={onChange} type='password'/>
              <br/>
              <Button fluid size='medium' loading={loading} onClick={handleSubmit}>Register
              </Button>
            </Segment>
          </Form>
          <p>Already have an account?<a href="/login"> Login</a></p>
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default RegisterComponent
