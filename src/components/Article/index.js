import React from 'react';
import {
 Container, Header, Image, Segment,
} from 'semantic-ui-react';
import renderHtml from 'react-render-html';
import PropTypes from 'prop-types';
import Moment from 'moment';
import './article.scss';


const ArticleComponent = ({ article, isFetching }) => {
  const fetchedArticle = article.article;
  return (
    <Segment loader={isFetching} basic>
      <Container text style={{ marginTop: '7em' }}>
        <Header as="h1">{fetchedArticle && fetchedArticle.title}</Header>
        <Image
          src={(fetchedArticle && fetchedArticle.image)
        || 'https://source.unsplash.com/random/720x580'}
          className="article-image"
        />
        <p>{fetchedArticle && fetchedArticle.description}</p>
        <span className="article-span">
          {fetchedArticle && fetchedArticle.author.username}
        </span>
        {'| '}
        <span className="article-span">
          {Moment(fetchedArticle && fetchedArticle.created_at).format('dddd Do MMMM YYYY')}
        </span>

        { fetchedArticle && renderHtml(fetchedArticle.body)}
      </Container>
    </Segment>
);
};
ArticleComponent.propTypes = {
  article: PropTypes.shape({}).isRequired,
  isFetching: PropTypes.bool.isRequired,
};
export default ArticleComponent;
