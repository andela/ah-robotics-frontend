import {
  Button, Container, Form, Grid,
} from 'semantic-ui-react';
import CKEditor from 'react-ckeditor-component';
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css';
import '../ArticleEditor/articleEditor.scss';

const UpdateArticleComponent = ({
onInputChange, onEditorChange, handleArticleUpdate, updateArticle, articleProps, tagEvents,
}) => {
const {
 tag, tagList, title, body, description,
} = articleProps;
 return (
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
               value={title}
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
               className="editor-input,article-title"
               onChange={onInputChange}
               required
               maxLength={80}
               value={description}
             />
             <TagsInput
               value={tagList}
               onChange={tagEvents.handleChange}
               inputValue={tag}
               onChangeInput={tagEvents.handleChangeInput}
               maxLength={20}
             />
             <p className="success-message">
               {(updateArticle.isUpdated) && 'Article updated successfully'}
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
       <div className="editor-container">
         <div>
           <p className="editor-error">
             {(updateArticle.errors) && updateArticle.errors.body && 'Body cannot be empty'}
           </p>
         </div>
         <CKEditor content={body} events={{ change: onEditorChange }} />
       </div>
     </Fragment>
   </Container>
  );
};
UpdateArticleComponent.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  onEditorChange: PropTypes.func.isRequired,
  handleArticleUpdate: PropTypes.func.isRequired,
  updateArticle: PropTypes.shape({}).isRequired,
  tagEvents: PropTypes.shape({}).isRequired,
  articleProps: PropTypes.shape({}).isRequired,
};
export default UpdateArticleComponent;
