import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Container } from 'semantic-ui-react';
import './navigation.scss';
import PropTypes from 'prop-types';
import { logout } from '../../utils/auth';


const guestLinks = (
  <Menu.Menu position="right">
    <NavLink to="/">
      <Menu.Item name="Home" />
    </NavLink>
    <NavLink to="/login">
      <Menu.Item
        name="Login"
      />
    </NavLink>
    <NavLink to="/register">
      <Menu.Item name="Register" />
    </NavLink>
  </Menu.Menu>
);
const protectedLinks = (
  <Menu.Menu position="right">
    <NavLink to="/">
      <Menu.Item name="Home" />
    </NavLink>
    <NavLink to="/articles/new-story">
      <Menu.Item name="New Article" />
    </NavLink>
    <NavLink to="/profiles">
      <Menu.Item name="Profile" />
    </NavLink>
    <Menu.Menu position="right">
      <NavLink to="/">
        <Menu.Item
          onClick={() => logout()}
          name="Logout"
        />
      </NavLink>
    </Menu.Menu>
  </Menu.Menu>
);

const NavigationComponent = ({ isAuthenticated }) => (
  <div>

    <Container>
      <Menu className="navbar" pointing secondary>
        {!isAuthenticated && guestLinks}
        {isAuthenticated && protectedLinks}
      </Menu>
    </Container>

  </div>
)

NavigationComponent.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};
export default NavigationComponent;
