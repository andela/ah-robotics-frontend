import React, { Component } from 'react';
import './article.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { articleFetch } from '../../redux/actions/ArticleActions/actions';
import ArticleComponent from '../../components/Article';

class ArticleView extends Component {
  componentDidMount() {
    const { match, fetchSingle } = this.props;
    const { slug } = match.params;
    fetchSingle(slug);
  }

  render() {
    const { articles } = this.props;
    return (
      <ArticleComponent article={articles.data} isFetching={articles.isFetching} />
    );
  }
}

const mapStateToProps = ({ articles }) => ({
articles,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchSingle: articleFetch,
}, dispatch);

ArticleView.propTypes = {
  match: PropTypes.shape({}).isRequired,
  fetchSingle: PropTypes.shape({}).isRequired,
  articles: PropTypes.shape({}).isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(ArticleView);
