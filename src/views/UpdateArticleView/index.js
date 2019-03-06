import React, { Component } from 'react';
import '../CreateArticleView/editor.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import UpdateArticleComponent from '../../components/UpdateArticle';
import { clearState, updateUserArticle } from '../../redux/actions/ArticleActions/actions';

class UpdateArticleView extends Component {
  state = {
    title: '',
    description: '',
    body: '',
    errors: {},
    tagList: [],
    tag: '',
    slug: '',
  };

componentWillMount() {
  const { articles, history } = this.props;
  if (!articles.data.article) {
    history.push('/');
  }
  const { article } = articles.data;
   this.setState(article && {
                body: article.body,
                title: article.title,
                description: article.description,
                slug: article.slug,
                tagList: article.tagList,
      });
}

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { history, updateArticle, clearUpdate } = this.props;
    const { data, isUpdated } = updateArticle;
    if (isUpdated) {
      const { slug } = data.article;
      setTimeout(() => {
        clearUpdate();
        history.push(`/article/${slug}`);
      }, 1000);
    }
  }

  handleChangeInput = (tag) => {
    this.setState({ tag });
  };

  handleChange = (tags) => {
    const { tagList, tag } = this.state;
    const tagSet = new Set(tagList.map(item => item.toLowerCase()));
    if (!tagSet.has(tag.toLowerCase())) {
      this.setState({ tagList: tags });
    }
  };

  handleArticleUpdate = () => {
    const { updateArticleAction } = this.props;
    const data = {
      ...this.state,
    };
    updateArticleAction(data);
  };

  onEditorChange = (event) => {
    const content = event.editor.getData();
    this.setState({ body: content });
  };

  onInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { updateArticle } = this.props;
    const tagEvents = {
      handleChange: this.handleChange,
      handleChangeInput: this.handleChangeInput,
    };
    return (
      <UpdateArticleComponent
        onInputChange={this.onInputChange}
        onEditorChange={this.onEditorChange}
        updateArticle={updateArticle}
        handleArticleUpdate={this.handleArticleUpdate}
        articleProps={this.state}
        tagEvents={tagEvents}
      />

    );
  }
}

const mapStateToProps = ({ updateArticle, articles }) => ({
  updateArticle, articles,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  updateArticleAction: updateUserArticle,
  clearUpdate: clearState,
}, dispatch);

UpdateArticleView.propTypes = {
  updateArticle: PropTypes.shape({}).isRequired,
  updateArticleAction: PropTypes.func.isRequired,
  clearUpdate: PropTypes.func.isRequired,
  history: PropTypes.shape({}).isRequired,
  articles: PropTypes.shape({}).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateArticleView);
