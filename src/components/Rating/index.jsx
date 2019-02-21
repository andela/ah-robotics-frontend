import React from 'react';
import './ratings.scss';
import {
 Rating, Grid, Segment, Header,
} from 'semantic-ui-react';

const StarRatings = (handleRate, ratings) => (
  <Grid.Column>
    <Segment.Group>
      <Segment>
        <Grid>
          <Header as="h3">Please Rate this article</Header>
        </Grid>
        <Grid>
          <Rating
            onRate={handleRate}
            compact
            content="Clear"
            floated="right"
            size="small"
            icon="star"
            defaultRating={3}
            maxRating={5}
          />
          <Rating
            icon="star"
            defaultRating={4}
            disabled
            maxRating={5}
          />
          <pre>{JSON.stringify(ratings, null, 2)}</pre>
        </Grid>
      </Segment>

    </Segment.Group>
  </Grid.Column>
);


export default StarRatings;
