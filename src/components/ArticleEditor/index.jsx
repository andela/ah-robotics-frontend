import {
  Button, Container, Form, Grid,
} from 'semantic-ui-react';
import CKEditor from 'react-ckeditor-component';
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './articleEditor.scss';

const ArticleEditor = ({
 onInputChange, onEditorChange, handleArticlePost, createArticle, body,
}) => (
  <Container>
    <Fragment>
      <Grid>
        <Grid.Row>
          <Grid.Column width={12}>
            <p
              className="editor-error"
            >
              {(createArticle.errors) && createArticle.errors.title && 'Title is required'}
            </p>
            <Form.Input
              fluid
              name="title"
              placeholder="Title"
              transparent
              className="editor-input"
              onChange={onInputChange}
              maxLength={80}
            />
            <p
              className="editor-error"
            >
              {(createArticle.errors) && createArticle.errors.description && 'Description is required'}
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
            />
            <p className="success-message">
              {(createArticle.isPosted) && 'Article posted successfully'}
            </p>
          </Grid.Column>
          <Grid.Column width={4} className="right-column">
            <Button
              type="submit"
              basic
              color="green"
              content="Post"
              position="right"
              onClick={handleArticlePost}
              loading={createArticle.isPosting}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <div>
        {' '}
        <p className="editor-error">{(createArticle.errors) && createArticle.errors.body && 'Body cannot be empty'}</p>
      </div>
      <CKEditor content={body} events={{ change: onEditorChange }} />
    </Fragment>
  </Container>
);
ArticleEditor.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  onEditorChange: PropTypes.func.isRequired,
  handleArticlePost: PropTypes.func.isRequired,
  createArticle: PropTypes.shape({}).isRequired,
  body: PropTypes.string.isRequired,
};
export default ArticleEditor;
