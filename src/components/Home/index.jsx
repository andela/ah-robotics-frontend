import React from 'react';
import logo from '../../logo.png';
import '../../App.scss';

const HomeComponent = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
          Welcome to Authors Haven
      </p>
          The place of choice.
    </header>
  </div>
  );

export default HomeComponent;
