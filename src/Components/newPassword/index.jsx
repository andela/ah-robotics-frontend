import React from 'react';
import { Button, Form, Image, Grid, Header, Segment } from 'semantic-ui-react';
import './resetpassword.scss';
import logo from './logo.png';

const NewPasswordComponent = ({ onChange, handleSubmit }) => (
    <div className='login-form'>
      <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
        <Grid.Column className='form-container' >
          <Image textAlign='center' src={logo} className="img-logo" alt="logo" />
          <Header as='h2' className='login-header' textAlign='center'>
            Reset Password
            </Header>
             
          <Form size='large'>
            <Segment basic>
<<<<<<< HEAD
            
            <Form.Input transparent fluid placeholder='New Password' onChange={onChange} type='password' name="password"/>
=======
             
            <Form.Input transparent fluid placeholder='Password' onChange={onChange} type='password' name="password"/>
>>>>>>> 6887917... feat(resetPassword): set new password functionality
            <br/>
            <Form.Input transparent fluid placeholder='Confirm Password' onChange={onChange} type='password' name="confirm_password"/>
            <br />
              <Button type="submit" color='bg-green' className='btn-login' fluid size='large' style={{ border: 30 }} onClick={handleSubmit}>
                Reset Password
                </Button>
            </Segment>
          </Form>
          <br />
        </Grid.Column>
      </Grid>
    </div>
  );
  
  export default NewPasswordComponent;