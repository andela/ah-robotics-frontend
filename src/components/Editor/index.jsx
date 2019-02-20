import React, { Component, Fragment } from 'react';
import CKEditor from 'react-ckeditor-component';
import {
  Button, Segment, Form, Grid,
} from 'semantic-ui-react';
import './editor.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { postArticle } from '../../redux/actions/ArticleActions/articles.actions';


class CreateArticle extends Component {
  state = {
    title: '',
    description: '',
    body: '',
    errors: {},
    tagList: [],
  };

  handleArticlePost = () => {
    const { postArticle: postUserArticle } = this.props;
    const data = {
      ...this.state,
    };
    console.log(data);
    postUserArticle(data);
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
    const { createArticle } = this.props;
    return (
      <Segment>
        <Fragment>
          <Grid>
            <Grid.Row>
              <Grid.Column width={12}>
                <p style={{ color: 'red' }}>{(createArticle.errors) && createArticle.errors.title && 'Title is required'}</p>
                <Form.Input
                  fluid
                  name="title"
                  placeholder="Title"
                  transparent
                  style={{ width: '60%', marginBottom: '1em', marginTop: '1em' }}
                  onChange={this.onInputChange}
                />
                <p style={{ color: 'red' }}>{(createArticle.errors) && createArticle.errors.description && 'Description is required'}</p>
                <Form.Input
                  fluid
                  name="description"
                  placeholder="Description"
                  transparent
                  style={{ width: '60%', marginBottom: '1em', borderTop: 0 }}
                  onChange={this.onInputChange}
                  required
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
                <p style={{ color: '#00d0a0', size: 'tiny' }}>
                  {(createArticle.isPosted) && 'Article posted successfully'}
                </p>
              </Grid.Column>
              <Grid.Column width={2}>
                <Button
                  type="submit"
                  basic
                  color="green"
                  content="Post"
                  style={{ margin: '0.8em' }}
                  onClick={this.handleArticlePost}
                  loading={createArticle.isPosting}
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <div>
            {' '}
            <p style={{ color: 'red' }}>{(createArticle.errors) && createArticle.errors.body && 'Body cannot be empty'}</p>
          </div>
          <CKEditor activeClass="p10" content={body} events={{ change: this.onEditorChange }} />
        </Fragment>
      </Segment>
    );
  }
}

const mapStateToProps = ({ createArticle }) => ({
  createArticle,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  postArticle,
}, dispatch);

CreateArticle.propTypes = {
  postArticle: PropTypes.func.isRequired,
  createArticle: PropTypes.shape({}).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateArticle);
