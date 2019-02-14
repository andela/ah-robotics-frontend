import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Container} from 'semantic-ui-react';

const NavigationComponent = () => (
  <div>

    <Container>
      <Menu text>
        <NavLink to="/">
          <Menu.Item name="Home" />
        </NavLink>

        <NavLink to="/login">
          <Menu.Item name="Login" />
        </NavLink>
        <NavLink to="/register">
          <Menu.Item name="SignUp" />
        </NavLink>
        <NavLink to="/articles">
          <Menu.Item name="Articles" />
        </NavLink>
        <NavLink to="/profiles">
          <Menu.Item name="Profile" />
        </NavLink>
      </Menu>
    </Container>

  </div>

);


export default NavigationComponent;
