import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Pagination } from 'semantic-ui-react';
import { articleFetch, clearState } from '../../redux/actions/ArticleActions/actions';
import PopularComponent from '../../components/Popular';
import ArticlesListing from '../../components/ArticlesListing';
import './articleslisting.scss';

class ArticlesView extends Component {
  static propTypes={
    getArticles: PropTypes.func.isRequired,
    articles: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  };

  state = {
    activePage: 1,
  };

  componentDidMount() {
    const { getArticles } = this.props;
    getArticles();
  }

  componentWillReceiveProps() {
    window.scrollTo(0, 0);
  }

  handlePaginationChange = (e, { activePage }) => {
    this.setState({ activePage }, () => {
      const currentState = this.state;
      const currentPage = currentState.activePage;
      const { getArticles } = this.props;
      getArticles({ page: currentPage });
      this.setState({ activePage: currentPage });
    });
  }

  render() {
    const { articles } = this.props;
    const { activePage } = this.state;

    return (
      <div>
        <PopularComponent isFetching={articles.isFetching} />
        <ArticlesListing articles={articles.data} isFetching={articles.isFetching} />

        { articles.data.count > 10 && (
        <div>

          <Pagination
            id="pagination"
            totalPages={Math.ceil(articles.data.count / 10)}
            activePage={activePage}
            onPageChange={this.handlePaginationChange}
          />
        </div>
         )}

      </div>
    );
  }
}

const mapStateToProps = ({ articles }) => ({
  articles,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getArticles: articleFetch,
  clearState,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesView);
