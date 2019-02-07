import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

// Create a login component view
// This code is a modification of the sample login page in Semantic UI
const LoginView = () =>
(
    <div className='login-form'>
    <style>
        {`
        body > div,
        body > div > div,
        body > div > div > div.login-form {
            height: 100%;
        }
        `}
    </style>
    <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 550 }}>
        <Header as='h2' color='blue' textAlign='center'>
          Log-in to Author Haven
        </Header>
        <Form size='large'>
          <Segment >
            <Form.Input fluid icon='user' iconPosition='left' placeholder='email address' />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
            />

            <Button color='blue' fluid size='medium'>
              Login
            </Button>
          </Segment>
        </Form>
        <Message>
          New to us? <a href='#'>Sign Up</a>
        </Message>
      </Grid.Column>
    </Grid>
  </div>
);

export default LoginView;
