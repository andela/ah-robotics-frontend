import {
  Button, Container, Form, Grid,
} from 'semantic-ui-react';
import CKEditor from 'react-ckeditor-component';
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { WithContext as ReactTags } from 'react-tag-input';
import '../ArticleEditor/articleEditor.scss';

const KeyCodes = {
  comma: 188,
  enter: 13,
};
const delimiters = [KeyCodes.comma, KeyCodes.enter];
const UpdateArticleComponent = ({
 article, onInputChange, onEditorChange, handleArticleUpdate, updateArticle, body, handleDelete, handleAddition, tagList,
}) => (
  <Container>
    <Fragment>
      <Grid>
        <Grid.Row>
          <Grid.Column width={12}>
            <p
              className="editor-error"
            >
              {(updateArticle.errors) && updateArticle.errors.title && 'Title is required'}
            </p>
            <Form.Input
              fluid
              name="title"
              placeholder="Title"
              transparent
              className="editor-input"
              onChange={onInputChange}
              maxLength={80}
              value={article && article.title}
            />
            <p
              className="editor-error"
            >
              {(updateArticle.errors) && updateArticle.errors.description && 'Description is required'}
            </p>
            <Form.Input
              fluid
              name="description"
              placeholder="Description"
              transparent
              className="editor-input"
              onChange={onInputChange}
              required
              maxLength={80}
              value={article && article.description}
            />
            <ReactTags
              tags={tagList}
              handleAddition={handleAddition}
              handleDelete={handleDelete}
              delimiters={delimiters}
            />
            <p className="success-message">
              {(updateArticle.isUpdated) && 'Article posted successfully'}
            </p>
          </Grid.Column>
          <Grid.Column width={4} className="right-column">
            <Button
              type="submit"
              basic
              color="green"
              content="Save"
              position="right"
              onClick={handleArticleUpdate}
              loading={updateArticle.isUpdating}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <div>
        {' '}
        <p className="editor-error">{(updateArticle.errors) && updateArticle.errors.body && 'Body cannot be empty'}</p>
      </div>
      <CKEditor content={body} events={{ change: onEditorChange }} />
    </Fragment>
  </Container>
);
UpdateArticleComponent.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  onEditorChange: PropTypes.func.isRequired,
  handleArticleUpdate: PropTypes.func.isRequired,
  updateArticle: PropTypes.shape({}).isRequired,
  body: PropTypes.string.isRequired,
};
export default UpdateArticleComponent;
