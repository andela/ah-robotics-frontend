import React from 'react';
import {
   Image, Grid, Container, Icon, Label, Menu, Header, GridRow, Button, Message,
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
              { (user.followUser.detail) ? (<Message color="green">{ user.followUser.detail.message }</Message>) : null }
              { (user.followUser.errors) ? (<Message color="red">{ user.followUser.errors.errors.detail.error }</Message>) : null}
              { user.profile && (user.profile.following) ? <Button loading={user.followUser.isLoading} onClick={user.handleUnfollow && user.handleUnfollow} color="red">unfollow</Button> : <Button loading={user.followUser.isLoading} onClick={user.handleFollow && user.handleFollow}>Follow</Button> }
              { (user.followUser.errors) ? (<p style={{ color: 'red' }}>{ user.followUser.errors.errors.detail.error }</p>) : null}
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
                {/* Followers */}
                <a href id="edit-profile-btn" positive><NavLink to="followersprofile"><span id="edit-profile">Followers</span></NavLink></a>
                <Label color="teal" floating>
                  {user.profile && user.profile.followers}
                </Label>
              </Menu.Item>
              <Menu.Item as="a">
                <Icon name="users" />
                {' '}
                {/* Following */}
                <a href id="edit-profile-btn" positive><NavLink to="followingprofile"><span id="edit-profile">Following</span></NavLink></a>
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
