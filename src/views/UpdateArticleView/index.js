import React, { Component } from 'react';
import '../CreateArticleView/editor.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import UpdateArticleComponent from '../../components/UpdateArticle';
import { updateUserArticle } from '../../redux/actions/ArticleActions/actions';

class UpdateArticleView extends Component {
  state = {
    title: '',
    description: '',
    body: '',
    errors: {},
    tagList: [{ id: '1', text: 'TIA' }],
  };

componentWillMount() {
  const { articles } = this.props;
  const { article } = articles.data;
  this.setState({ body: article && article.body });
}

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { history, updateArticle } = this.props;
    const { data, isUpdated } = updateArticle;
    if (isUpdated) {
      const { slug } = data.article;
      setTimeout(() => {
        history.push(`/article/${slug}`);
      }, 1000);
    }
  }

  handleDelete = (i) => {
    const { tagList } = this.state;
    this.setState({
      tagList: tagList.filter((tag, index) => index !== i),
    });
  };

  handleAddition = (tag) => {
    console.log(tag);
    const { tagList } = this.state;
    const items = [].concat(tagList, tag);
    this.setState({ tagList: items });
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
    const { body, tagList } = this.state;
    const { updateArticle, articles } = this.props;
    const { article } = articles.data;
    return (
      <UpdateArticleComponent
        article={article}
        onInputChange={this.onInputChange}
        onEditorChange={this.onEditorChange}
        updateArticle={updateArticle}
        handleArticleUpdate={this.handleArticleUpdate}
        body={body}
        handleAddition={this.handleAddition}
        handleDelete={this.handleDelete}
        tagList={tagList}
      />

    );
  }
}

const mapStateToProps = ({ updateArticle, articles }) => ({
  updateArticle, articles,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  updateArticleAction: updateUserArticle,
}, dispatch);

UpdateArticleView.propTypes = {
  updateArticle: PropTypes.func.isRequired,
  updateArticleAction: PropTypes.shape({}).isRequired,
  history: PropTypes.shape({}).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateArticleView);
