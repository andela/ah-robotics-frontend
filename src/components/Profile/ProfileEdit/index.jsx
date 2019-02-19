import React from 'react';
import {
    Image, Grid, Container, Button, Form, Input, Segment, Divider,
} from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import './profile.scss';
import PropTypes from 'prop-types';
// import imglove from '../Images/lov.jpeg';

const ProfileEditComponent = ({
  userProfile, profile, handleSubmit, onChange, onImageChange,
}) => (
  <Container>
    <Segment placeholder>
      <Form enctype="multipart/formdata">
        <Grid columns={2} relaxed="very" stackable>
          {/* {console.log(profile.profileData)} */}
          <Grid.Column>
            <Grid.Column width={4}>
              <Image id="sample-img" src={userProfile && userProfile.image} size="medium" circular className="App-logo" color="red" alt="logo" />
            </Grid.Column>
            <Input type="file" name="image" accept="image/*" onChange={onImageChange} />
          </Grid.Column>

          <Grid.Column verticalAlign="middle">
            <Form.Field className="bio-textarea">
              <Form.TextArea rows="10" label="Bio input" placeholder="Tell us more about you..." name="bio" onChange={onChange} value={profile.bio} />
            </Form.Field>
          </Grid.Column>
        </Grid>
      </Form>


      <Divider vertical />
    </Segment>
    <Button.Group>
      <Button><NavLink to="profiles">Cancel</NavLink></Button>
      <Button.Or />
      <Button fluid type="submit" onClick={handleSubmit} positive>Save</Button>
    </Button.Group>
  </Container>
    );
ProfileEditComponent.propTypes = {
    userProfile: PropTypes.shape({}).isRequired,
    profile: PropTypes.shape({}).isRequired,
    handleSubmit: PropTypes.shape({}).isRequired,
    onChange: PropTypes.shape({}).isRequired,
    onImageChange: PropTypes.shape({}).isRequired,
  };

export default ProfileEditComponent;
