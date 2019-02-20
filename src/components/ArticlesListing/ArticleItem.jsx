import React from 'react';
import { Item, Label, Loader } from 'semantic-ui-react';
import { Grid } from 'semantic-ui-react/dist/commonjs/collections/Grid';

const ArticleItem = ({ article }) => {
  console.log(article);

  return (
    <Item>
      <Item.Image src="https://source.unsplash.com/random" />
      <Item.Content>
        <Item.Header as="a">{article.title}</Item.Header>
        <p>{article.body}</p>
        <Item.Extra>
          <Label style={{ textTransform: 'capitalize' }}>{`By ${article.author.username}`}</Label>
          <Label icon="time" content={`Read time: ${article.read_time}`} />
        </Item.Extra>
      </Item.Content>
    </Item>
  );
};
export default ArticleItem;
