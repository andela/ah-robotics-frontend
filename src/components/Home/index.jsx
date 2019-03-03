import React from 'react';
import {
   Image, Grid, Container, Icon, Label, Menu, Header, List,
} from 'semantic-ui-react';
import './following.scss';
import '../Login/login.scss';

const FollowingComponent = (following) => {
const user = following;
    return (
      <Container>
        <Grid>
          <Grid.Row className="float">
            <Grid.Column width={4}>
              <Image id="sample-img" src={user.following && user.following.image} size="medium" circular className="App-logo" color="red" alt="logo" />
            </Grid.Column>
            <Grid.Column width={6}>
              <Header id="sample-header" as="h3">
                <span id="user-username">{user.following && user.following.username }</span>
              </Header>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Menu compact>
              <Menu.Item as="a">
                <Icon name="users" />
                {' '}
                Following
                <Label color="teal" floating>
                  {user.following && user.following.following_count }
                </Label>
              </Menu.Item>
            </Menu>
          </Grid.Row>
          <List divided verticalAlign="middle">
            <h2>List of users you are following </h2>
            {user.followingUsers && user.followingUsers.map((followingUser, index) => (
              <List.Item key={followingUser.username}>
                <List.Content>
                  {index + 1}
                  -
                  <a href={`profile/${followingUser.username}`}>{followingUser.username}</a>
                </List.Content>
              </List.Item>
            ))}
          </List>
        </Grid>
      </Container>
);
};
export default FollowingComponent;
