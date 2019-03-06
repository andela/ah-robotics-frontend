import React from 'react';
import {
   Image, Grid, Container, Icon, Label, Menu, Header, GridRow, Button,
} from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import './profile.scss';
import '../Login/login.scss';

const ProfileComponent = (profile) => {
const user = profile;
    return (
      <Container>
        <Grid>
          <Grid.Row className="float">
            <Grid.Column width={4}>
              <Image id="sample-img" src={user.profile && user.profile.image} size="medium" circular className="App-logo" color="red" alt="logo" />
            </Grid.Column>
            <Grid.Column width={6}>
              <Header id="sample-header" as="h3">
                <span id="user-username">{user.profile && user.profile.username }</span>
              </Header>
              <p>
                {' '}
                <span id="bio-text">{user.profile && user.profile.bio }</span>
              </p>
            </Grid.Column>
          </Grid.Row>
          <GridRow>
            <div>
              <Button id="edit-profile-btn" positive><NavLink to="editprofile"><span id="edit-profile">Edit Profile</span></NavLink></Button>
            </div>
          </GridRow>
          <Grid.Row>
            <Menu compact>
              <Menu.Item as="a">
                <Icon name="users" />
                {' '}
                Followers
                <Label color="teal" floating>
                  {user.profile && user.profile.followers}
                </Label>
              </Menu.Item>
              <Menu.Item as="a">
                <Icon name="users" />
                {' '}
                Following
                <Label color="teal" floating>
                  {user.profile && user.profile.following_count }
                </Label>
              </Menu.Item>
            </Menu>
          </Grid.Row>
        </Grid>
      </Container>
);
};
export default ProfileComponent;
