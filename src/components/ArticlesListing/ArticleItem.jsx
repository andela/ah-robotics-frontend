import React from 'react';
import { Item, Label } from 'semantic-ui-react';
import renderHTML from 'react-render-html';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import TruncateMarKup from 'react-truncate-markup';

const ArticleItem = ({ article }) => ({ article }
  && (
  <Item>
    <Item.Image src={(article.image) ? article.image : 'https://source.unsplash.com/random/400x300'} />
    <Item.Content>
      <Item.Header as="a">
        <NavLink to={`article/${article.slug}`}>{article.title}</NavLink>
      </Item.Header>
      <TruncateMarKup lines={12}>
        <p>{renderHTML(article.body)}</p>
      </TruncateMarKup>
      <Item.Extra>
        <Label className="author-name">{`By ${article.author.username}`}</Label>
        <Label content={`Read time: ${article.read_time}`} icon="time" />
      </Item.Extra>
    </Item.Content>
  </Item>
)
);
ArticleItem.propTypes = {
  article: PropTypes.shape({}).isRequired,
};
export default ArticleItem;
