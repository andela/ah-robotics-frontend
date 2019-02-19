import React from 'react';
import {
 Container, Header, Image, Segment,
} from 'semantic-ui-react';
import renderHtml from 'react-render-html';
import PropTypes from 'prop-types';
import Moment from 'moment';
import './article.scss';


const ArticleComponent = ({ article, rating, isFetching }) => {
  const fetchedArticle = article.article;
  return (
    <Segment loader={isFetching} basic>
      <Container text style={{ marginTop: '7em' }}>
        <Header id="single-article-head" as="h1">{fetchedArticle && fetchedArticle.title}</Header>
        <p id="article-description">{fetchedArticle && fetchedArticle.description}</p>
        <Image
          src={(fetchedArticle && fetchedArticle.image)
        || 'https://source.unsplash.com/random/720x580'}
          className="article-image"
        />
        <div className="clearfix">
          <span className="article-span">
            {fetchedArticle && fetchedArticle.author.username}
          </span>
          {'| '}
          <span className="article-span">
            {Moment(fetchedArticle && fetchedArticle.created_at).format('dddd Do MMMM YYYY')}
          </span>
          <span className="article-span float-right">{rating}</span>
        </div>
        <div className="article-body">
          { fetchedArticle && renderHtml(fetchedArticle.body)}
        </div>
      </Container>
    </Segment>
);
};
ArticleComponent.propTypes = {
  article: PropTypes.shape({}).isRequired,
  rating: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
};
export default ArticleComponent;
