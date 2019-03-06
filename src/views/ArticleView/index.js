import React, { Component } from 'react';
import './article.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { articleFetch, articleImageUpload } from '../../redux/actions/ArticleActions/actions';
import ArticleComponent from '../../components/Article';
import RatingsView from '../RatingsView/index';
import AddCommentComponent
  from '../../components/Comment/addComment';
import CommentsListComponent
  from '../../components/Comment/commentList';


export class ArticleView extends Component {
  imageInput = React.createRef();

  state={
    image: '',
    slug: '',
  };

  componentDidMount() {
    const { match, fetchSingle } = this.props;
    const { slug } = match.params;
    this.setState({ slug });
    fetchSingle({ slug });
  }

  onImageChange=(event) => {
    this.setState({
        [event.target.name]: event.target.files[0],
      },
      () => {
        const { image, slug } = this.state;
        const { uploadImageAction } = this.props;
        uploadImageAction({ image, slug });
      });
  };

  handleEdit =(event) => {
    event.preventDefault();
    const { history } = this.props;
    history.push('/articles/update/');
  };

  getInputFocus =() => {
    this.imageInput.current.click();
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
          onImageChange={this.onImageChange}
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
  uploadImageAction: articleImageUpload,
}, dispatch);

ArticleView.propTypes = {
  match: PropTypes.shape({}).isRequired,
  fetchSingle: PropTypes.func.isRequired,
  articles: PropTypes.shape({}).isRequired,
  history: PropTypes.shape({}).isRequired,
  uploadImageAction: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(ArticleView);
