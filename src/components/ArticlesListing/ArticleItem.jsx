import React from 'react';
import { Item, Label } from 'semantic-ui-react';
import renderHTML from 'react-render-html';
import PropTypes from 'prop-types';

const ArticleItem = ({ article }) => (
  <Item>
    <Item.Image src={(article.image) ? article.image : 'https://source.unsplash.com/random'} />
    <Item.Content>
      <Item.Header as="a">{article.title}</Item.Header>
      <p>{renderHTML(article.body)}</p>
      <Item.Extra>
        <Label style={{ textTransform: 'capitalize' }}>{`By ${article.author.username}`}</Label>
        <Label icon="time" content={`Read time: ${article.read_time}`} />
      </Item.Extra>
    </Item.Content>
  </Item>
);
ArticleItem.propTypes = {
  article: PropTypes.shape({}).isRequired,
};
export default ArticleItem;
