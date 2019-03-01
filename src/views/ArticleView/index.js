import React, { Component } from 'react';
import './article.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { articleFetch }
  from '../../redux/actions/ArticleActions/actions';
import ArticleComponent from '../../components/Article';
import RatingsView from '../RatingsView/index';
import AddCommentComponent
  from '../../components/Comment/addComment';
import CommentsListComponent
  from '../../components/Comment/commentList';


class ArticleView extends Component {
  imageInput = React.createRef();

  componentDidMount() {
    const { match, fetchSingle } = this.props;
    const { slug } = match.params;
    fetchSingle({ slug });
  }

  handleEdit =(event) => {
    event.preventDefault();
    const { history } = this.props;
    history.push('/articles/update/');
  };

  getInputFocus =() => {
    // this.imageInput.current.click();
  };

  render() {
    const { articles } = this.props;
    const currentUser = JSON.parse(localStorage.getItem('user'));
    return (
      <div>
        <ArticleComponent
          article={articles.data}
          rating={
            <RatingsView />}
          isFetching={articles.isFetching}
          handleEdit={this.handleEdit}
          imageInput={this.imageInput}
          getInputFocus={this.getInputFocus}
        />
        {currentUser !== null ? (
          <div>
            <AddCommentComponent />
            <CommentsListComponent
              user={currentUser}
            />
          </div>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = ({ articles }) => ({ articles });

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchSingle: articleFetch,
}, dispatch);

ArticleView.propTypes = {
  match: PropTypes.shape({}).isRequired,
  fetchSingle: PropTypes.shape({}).isRequired,
  articles: PropTypes.shape({}).isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(ArticleView);
