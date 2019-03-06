import React from 'react';
import { Form, Popup, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const ArticleButtonGroup = ({
 handleEdit, handleDelete, popUpEvents, isDeleting, isDeletePopUpOpen,
}) => (
  <Button.Group basic size="small" style={{ float: 'right' }}>
    <Button className="article-edit" content="Edit Article" icon="edit outline" onClick={handleEdit} hidden />
    <Popup
      id="delete-article-body"
      trigger={(
        <Button
          className="article-delete"
          content="Delete Article"
          icon="trash alternate outline"
          hidden
        />
      )}
      content={(
        <Form reply>
          <div id="delete-text-section">
            <p id="delete-popup-text">Delete Article ?</p>
          </div>
          <Button.Group>
            <Button
              id="cancel-article-button"
              content="Cancel"
              primary
              onClick={popUpEvents.handleDeleteClose}
            />
            <Button
              id="delete-article-button"
              content="Delete"
              primary
              onClick={handleDelete}
              loading={isDeleting}
            />
          </Button.Group>
        </Form>
      )}
      on="click"
      open={isDeletePopUpOpen}
      onClose={popUpEvents.handleDeleteClose}
      onOpen={popUpEvents.handleDeleteOpen}
      position="bottom center"
    />
  </Button.Group>
);
ArticleButtonGroup.propTypes = {
  isDeleting: PropTypes.bool.isRequired,
  isDeletePopUpOpen: PropTypes.bool.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  popUpEvents: PropTypes.shape({}).isRequired,
};
export default ArticleButtonGroup;
