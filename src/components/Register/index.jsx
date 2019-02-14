import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Button, Form, Image, Grid, Header, Segment, Sticky, Divider} from 'semantic-ui-react';
import './register.scss';
import logo from './logo.png';
import NavigationComponent from '../../components/Navigation/';


const RegisterComponent = ({ onChange, handleSubmit, errors, loading, registerSuccess: registerSuccess }) => {
  return (
    <div className='login-form'>
      <Grid textAlign='center' style={{height: '100%'}} verticalAlign='middle'>
        <Grid.Column className='form-container'>
          <Image src={logo} alt="logo"/>
          <Header as='h2'>Register</Header>
          {registerSuccess.success === true && <Message color="success" size="tiny" content={registerSuccess.user.message}/> }
          <Form size='large'>
            <Segment basic>
              {((errors) ? errors.email : null) ? <Label size="tiny" pointing="below" basic color="red">{errors.email }</Label>: null}
              <Form.Input transparent fluid placeholder='Email' onChange={onChange} name="email" icon='mail' iconPosition='left'/>
              {((errors) ? errors.username : null) ? <Label size="tiny" pointing="below" basic color="red">{errors.username }</Label>: null}
              <Form.Input transparent fluid placeholder='Username' onChange={onChange} name="username" icon='user' iconPosition='left'/>
              {((errors) ? errors.password : null) ? <Label size="tiny" pointing="below" basic color="red">{errors.password }</Label>: null}
              <Form.Input transparent fluid placeholder='Password' onChange={onChange} type='password' name="password" icon='lock' iconPosition='left'/>
              <Form.Input transparent fluid placeholder='Confirm Password' onChange={onChange} type='password' name="confirmPassword" icon='lock' iconPosition='left'/>
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
