import React from 'react';
import { Image, Grid, Header } from 'semantic-ui-react';
import './verification.scss';
import logo from './logo.png';


const VerifyRegistrationComponent = ({ verifyUser }) => (
  <div className="login-form">
    <Grid textAlign="center" style={{ height: '100%' }} verticalAlign="middle">
      <Grid.Column className="form-container">
        <Image textAlign="center" src={logo} className="img-logo" alt="logo" />
        <Header as="h2" className="login-header" textAlign="center">
          Verification
        </Header>
        {(verifyUser.errors) ? <p style={{ color: 'red' }}>{verifyUser.errors.data}</p> : null}
        {(verifyUser.data) ? <p style={{ color: 'green' }}>{verifyUser.data}</p> : null}
        <br />
      </Grid.Column>
    </Grid>
  </div>
);

export default VerifyRegistrationComponent;
