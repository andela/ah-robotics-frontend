import React from 'react';
import { PropTypes } from 'prop-types';
import {
  Segment, Rating, Loader, Message,
} from 'semantic-ui-react';

const RatingComponent = ({ prop, handleRate }) => {
  const { ratings, articles } = prop;
  return (
    <div>

      {
        prop.ratings.isError === true && (
          <Message color="red">
            {
              prop.ratings.error.detail ? 'Cannot decode the given token'
              && 'Please login to Rate this article' : prop.ratings.error.message
            }

          </Message>
        )
      }

      <Segment basic>

        {
          /* Display a loader if the ratings data is still loading */
          (ratings.isLoading || articles.isFetching)
          ? <Loader active inline />
          : (
          /* If the a user rates an article successfully,
          display the updated avarage rating */
          (ratings.isUpdated && !ratings.isLoading)
            ? (`Average(${Math.round(ratings.rating.data.average_rating * 10) / 10})`)
            // Otherwise, get the initial article's rating and display
            : (articles.data.article)
            ? (`Average(${!articles.data.article.rating.average_rating
              ? 0
              : Math.round(articles.data.article.rating.average_rating * 10) / 10})`)
            : 0
        )}
        <Rating icon="star" maxRating={5} onRate={handleRate} />
      </Segment>
    </div>
  );
};
RatingComponent.propTypes = {
  handleRate: PropTypes.func.isRequired,
  prop: PropTypes.shape({}).isRequired,
};

export default RatingComponent;
