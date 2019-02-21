import React, { Component } from 'react';
import './articles.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Pagination from 'react-js-pagination';
import { articleFetch } from '../../redux/actions/ArticleActions/articles.actions';
import PopularComponent from '../../components/Popular';
import ArticlesListing from '../../components/ArticlesListing';
//import { Pagination } from 'semantic-ui-react'


class ArticlesView extends Component {
  static propTypes={
    getArticles: PropTypes.func.isRequired,
    articles: PropTypes.arrayOf({}).isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      activePage: 1,
    };
  }

  componentDidMount() {
    const { getArticles } = this.props;
    getArticles();
  }

  componentWillReceiveProps(nextProps) {

  }

  handlePageChange = (pageNumber) => {
    const { getArticles } = this.props;
    getArticles(pageNumber);
    this.setState({ activePage: pageNumber });
  }

  render() {
    const { articles } = this.props;
    const { activePage } = this.props;
    

    return (
      <div>
        <PopularComponent isFetching={articles.isFetching} />
        <ArticlesListing articles={articles.data} isFetching={articles.isFetching} />
        { articles.data.count > 10 && (
        <div>
         <Pagination
            className="pagination"
            prevPageText="previous"
            nextPageText="next"
            firstPageText="first"
            lastPageText="last"
            activePage={activePage}
            itemsCountPerPage={10}
            totalItemsCount={articles.data.count}
            pageRangeDisplayed={Math.ceil(articles.data.count / 10)}
            onChange={this.handlePageChange}
          />  

          {/* <Pagination 
            id="pagination"
            defaultActivePage={activePage} 
            totalPages={Math.ceil(articles.data.count / 10)} 
            activePage={activePage}
            
            totalItemsCount={articles.data.count}
            pageRangeDisplayed={Math.ceil(articles.data.count / 10)}
            onClick={this.handlePageChange}
          />  */}
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
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesView);
