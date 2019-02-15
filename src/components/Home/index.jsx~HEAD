import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../logo.png';
import '../../App.scss';

const HomeComponent = ({ user }) => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      {(user.username) ? (
        <div>
          <p>
            {`Hello, ${user.username}`}
          </p>
          welcome to Authors Haven
        </div>
) : (
  <div>
    <p>
            Welcome to Authors Haven
    </p>
          The place to be.
  </div>
      )}

    </header>
  </div>
);

HomeComponent.propTypes = {
  user: PropTypes.shape({}).isRequired,
};

export default HomeComponent;
