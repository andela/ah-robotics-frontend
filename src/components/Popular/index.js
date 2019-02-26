import React from 'react';
import {
 Grid, Segment, Image,
} from 'semantic-ui-react';
import './popular.scss';
import PropTypes from 'prop-types';

const PopularComponent = ({ isFetching }) => (
  <Segment basic loading={isFetching}>
    <Grid>
      <Grid.Column width={8} className="left-banner">
        <Grid.Row>
          <Image src="https://source.unsplash.com/random/580x400" />
        </Grid.Row>
      </Grid.Column>
      <Grid.Column width={8} className="right-banner">
        <Grid.Column width={4}>
          <Image src="https://source.unsplash.com/random" />
        </Grid.Column>
        <Grid.Column width={4}>
          <Image src="https://source.unsplash.com/random" />
        </Grid.Column>
      </Grid.Column>
    </Grid>
  </Segment>
);
PopularComponent.propTypes = {
  isFetching: PropTypes.bool.isRequired,
};
export default PopularComponent;
