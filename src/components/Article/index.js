import React from 'react';
import {
 Container, Header, Image, Segment, Label,
 Button, Input,
} from 'semantic-ui-react';
import renderHtml from 'react-render-html';
import PropTypes from 'prop-types';
import Moment from 'moment';
import './article.scss';
import { getCurrentUser } from '../../utils/auth';

const activeUser = getCurrentUser();
const ArticleComponent = ({
 article, isFetching, handleEdit, imageInput, getInputFocus, rating,
}) => {
  const fetchedArticle = article.article;
  return (
    <Segment loader={isFetching} basic>
      {fetchedArticle && activeUser.username === fetchedArticle.author.username ? (
        <Button.Group basic size="small" style={{ float: 'right' }}>
          <Button className="article-edit" content="Edit Article" icon="edit outline" onClick={handleEdit} hidden />
          <Button className="article-delete" content="Delete Article" icon="trash alternate outline" hidden />
        </Button.Group>
      ) : null}
      <Container text style={{ marginTop: '7em' }}>
        <Header id="single-article-head" as="h1">{fetchedArticle && fetchedArticle.title}</Header>
        <p id="article-description">{fetchedArticle && fetchedArticle.description}</p>
        <span className="article-span">
          {fetchedArticle && fetchedArticle.author.username}
        </span>
        {'| '}
        <span className="article-span">
          {Moment(fetchedArticle && fetchedArticle.created_at).format('dddd Do MMMM YYYY')}
        </span>
        <Input
          style={{ display: 'none' }}
          type="file"
          name="file"
          id="file"
          className="inputfile"
          ref={imageInput}
        />
        <Image
          label={{
            as: 'a',
            color: 'teal',
            corner: 'right',
            icon: 'edit outline',
            onClick: getInputFocus,
          }}
          src={(fetchedArticle && fetchedArticle.image)
        || 'https://source.unsplash.com/random/720x580'}
          className="article-image"
          htmlFor="file"
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
        {
            (fetchedArticle)
            && fetchedArticle.tagList.map((object, i) => (
              <Label as="a" color="teal" tag>
                {
                  object
                }
              </Label>
            ))
        }
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
