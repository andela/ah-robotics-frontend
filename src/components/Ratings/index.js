import React from 'react';
import { PropTypes } from 'prop-types';
import {
    Header, Segment, Grid, Rating, Loader,
} from 'semantic-ui-react';

const RatingComponent = ({ prop, square, handleRate }) => (
  <div className="ratings-container">
    <Grid textAlign="center" style={{ height: '100%' }} verticalAlign="middle">
      <Grid.Column className="form-container">
        <Segment circular style={square}>
          <Header as="h2">
                Rating!
            <Header.Subheader>
              {prop.ratings.isLoading === true && <Loader active inline />}
              {prop.ratings.isUpdated
                ? (prop.ratings.isLoading === false
                  && JSON.stringify(prop.ratings.rating.data.average_rating)) : null}
            </Header.Subheader>
          </Header>
          <Rating icon="star" maxRating={5} onRate={handleRate} />
        </Segment>
      </Grid.Column>

    </Grid>

  </div>
);
RatingComponent.propTypes = {
    handleRate: PropTypes.func.isRequired,
    square: PropTypes.number.isRequired,
    prop: PropTypes.shape({}).isRequired,
  };

export default RatingComponent;
