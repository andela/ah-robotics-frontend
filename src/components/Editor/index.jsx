import React, { Component, Fragment } from 'react';
import CKEditor from 'react-ckeditor-component';
import {
  Button, Input, Segment, Form, Grid,
} from 'semantic-ui-react';
import './editor.css';


class CreateArticle extends Component {
  state = {
    title: '',
    description: '',
    body: '',
    tags: {},
    errors: {},
  };

  handleArticlePost = () => {
    const data = {
      ...this.state,
    };
    console.log(data);
  };

  onEditorChange = (event) => {
    const content = event.editor.getData();
    this.setState({ body: content });
  };

  onInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { body } = this.state;
    return (
      <Segment>
        <Fragment>
          <Grid>
            <Grid.Row>
              <Grid.Column width={12}>
                <Form.Input
                  fluid
                  name="title"
                  placeholder="Title"
                  transparent
                  style={{ width: '60%', marginBottom: '1em', marginTop: '1em' }}
                  onChange={this.onInputChange}
                />
                <Form.Input
                  fluid
                  name="description"
                  placeholder="Description"
                  transparent
                  style={{ width: '60%', marginBottom: '1em', borderTop: 0 }}
                  onChange={this.onInputChange}
                />
                <Form.Input
                  fluid
                  type="file"
                  name="image"
                  accept="image/*"
                  placeholder="Choose file"
                  transparent
                  style={{
 width: '60%', marginBottom: '2em', marginTop: '1em', float: 'left',
}}
                  onChange={this.onInputChange}
                />
              </Grid.Column>
              <Grid.Column width={2}>
                <Button
                  type="submit"
                  basic
                  color="green"
                  content="Post"
                  style={{ margin: '0.8em' }}
                  onClick={this.handleArticlePost}
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <CKEditor activeClass="p10" content={body} events={{ change: this.onEditorChange }} />
          <Input
            icon="tags"
            iconPosition="left"
            label={{ tag: true, content: 'Add Tag' }}
            labelPosition="right"
            placeholder="Enter tags"
            onChange={this.onInputChange}
          />
        </Fragment>
      </Segment>
    );
  }
}

export default CreateArticle;
