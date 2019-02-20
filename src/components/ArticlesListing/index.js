import React from 'react';
import {
  Grid, Segment, img, Item,
} from 'semantic-ui-react';
import './listings.scss';
import PropTypes from 'prop-types';
import ArticleItem from './ArticleItem';

const ArticlesListing = ({ articles, isFetching }) => {
  const allArticles = articles.articles;
  return (
    <Segment loading={isFetching}>
      <Grid>
        <Grid.Column width={12}>
          <Item.Group divided>
            {allArticles && allArticles.map(article => (
              (<ArticleItem article={article} />)
              ))}
          </Item.Group>
        </Grid.Column>
        <Grid.Column width={4}>
        </Grid.Column>
      </Grid>
    </Segment>
  );
};

ArticlesListing.propTypes = {
articles: PropTypes.arrayOf({}).isRequired,
  isFetching: PropTypes.bool.isRequired,
};
export default ArticlesListing;
