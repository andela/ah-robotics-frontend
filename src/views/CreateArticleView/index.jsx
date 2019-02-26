import React, { Component } from 'react';
import './editor.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import ArticleEditor from '../../components/ArticleEditor';
import { postArticle } from '../../redux/actions/ArticleActions/actions';

class CreateArticle extends Component {
  state = {
    title: '',
    description: '',
    body: '',
    errors: {},
    tagList: [],
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { history, createArticle } = this.props;
    const { data, isPosted } = createArticle;
    if (isPosted) {
      const { slug } = data.article;
      setTimeout(() => {
        history.push(`/article/${slug}`);
        }, 1000);
    }
  }

  handleArticlePost = () => {
    const { postArticle: postUserArticle } = this.props;
    const data = {
      ...this.state,
    };
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
      <ArticleEditor
        onInputChange={this.onInputChange}
        onEditorChange={this.onEditorChange}
        createArticle={createArticle}
        handleArticlePost={this.handleArticlePost}
        body={body}
      />
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
  history: PropTypes.shape({}).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateArticle);
