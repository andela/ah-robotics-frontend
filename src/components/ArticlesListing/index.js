import React from 'react';
import {
  Grid, Segment, img, Item,
} from 'semantic-ui-react';
import './listings.scss';
import ArticleItem from './ArticleItem';

const ArticlesListing = ({ articles }) => {
  const allArticles = articles.articles;
  return (
    <Segment placeholder className="lowerSection">
      <Grid columns={2} stackable textAlign="left">
        <Grid.Row verticalAlign="middle">
          <Grid.Column width={10}>
            <Item.Group divided>
              {allArticles && allArticles.map(article => (
              (<ArticleItem article={article} />)
              ))}
            </Item.Group>
          </Grid.Column>
          <Grid.Column width={6}>
            <p>Hello column</p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};

export default ArticlesListing;
