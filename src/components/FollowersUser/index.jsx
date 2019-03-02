import React from 'react';
import {
   Image, Grid, Container, Icon, Label, Menu, Header, Placeholder, Segment
} from 'semantic-ui-react';
import './follow.scss';
import './../Login/login.scss';

const FollowersComponent = (profile) => {
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
              {/* <p>
                {' '}
                <span id="bio-text">{user.profile && user.profile.bio }</span>
              </p> */}
            </Grid.Column>
          </Grid.Row>
          {/* <GridRow>
            <div>
              <Button id="edit-profile-btn" positive><NavLink to="editprofile"><span id="edit-profile">Edit Profile</span></NavLink></Button>
            </div>
          </GridRow> */}
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
          <Grid columns={3} stackable>
    <Grid.Column>
      <Segment raised>
        <Placeholder>
          <Placeholder.Header image>
            <Placeholder.Line Placeholder="username" type="text" hello />
            <Placeholder.Line Placeholder="bio" />
          </Placeholder.Header>
          <Placeholder.Paragraph>
            <Placeholder.Line length='medium' />
            <Placeholder.Line length='short' />
          </Placeholder.Paragraph>
        </Placeholder>
      </Segment>
    </Grid.Column>

    <Grid.Column>
      <Segment raised>
        <Placeholder>
          <Placeholder.Header image>
            <Placeholder.Line />
            <Placeholder.Line />
          </Placeholder.Header>
          <Placeholder.Paragraph>
            <Placeholder.Line length='medium' />
            <Placeholder.Line length='short' />
          </Placeholder.Paragraph>
        </Placeholder>
      </Segment>
    </Grid.Column>

    <Grid.Column>
      <Segment raised>
        <Placeholder>
          <Placeholder.Header image>
            <Placeholder.Line />
            <Placeholder.Line />
          </Placeholder.Header>
          <Placeholder.Paragraph>
            <Placeholder.Line length='medium' />
            <Placeholder.Line length='short' />
          </Placeholder.Paragraph>
        </Placeholder>
      </Segment>
    </Grid.Column>
  </Grid>
        </Grid>

      </Container>
);
};
export default FollowersComponent;
