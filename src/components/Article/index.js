import React, { Component } from 'react';
import {
  Container, Header, Image, Segment, Loader, Label, Grid,
} from 'semantic-ui-react';
import renderHtml from 'react-render-html';
import PropTypes from 'prop-types';
import Moment from 'moment';
import './article.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getCurrentUser } from '../../utils/auth';
import { deleteUserArticle } from '../../redux/actions/ArticleActions/actions';
import ArticleButtonGroup from './ArticleButtonGroup';

const activeUser = getCurrentUser();

class ArticleComponent extends Component {
  state = { isDeletePopUpOpen: false };

  componentWillUpdate(nextProps, nextState, nextContext) {
  const { deleteArticle } = nextProps;
  if (deleteArticle.isDeleted) {
     window.location.assign('/');
  }
}

  handleDeleteOpen = () => {
    this.setState({ isDeletePopUpOpen: true });
  };

  handleDeleteClose = () => {
    this.setState({ isDeletePopUpOpen: false });
  };

  handleDelete = () => {
    const { deleteArticleAction, articles } = this.props;
    const { article } = articles.data;
    deleteArticleAction({ slug: article.slug });
    setTimeout(() => {
      this.handleDeleteClose();
    }, 1000);
  };

  render() {
    const popUpEvents = {
     handleDeleteClose: this.handleDeleteClose,
     handleDeleteOpen: this.handleDeleteOpen,
    };
    const {
      articles, isFetching, handleEdit, imageInput, deleteArticle, rating,
    } = this.props;
    const { article: fetchedArticle } = articles.data;
    const { getInputFocus, onImageChange, updateImage } = this.props;
    const { isDeletePopUpOpen } = this.state;
    return (
      <Segment loader={isFetching} basic>
        {fetchedArticle && activeUser.username === fetchedArticle.author.username ? (
          <ArticleButtonGroup
            isDeletePopUpOpen={isDeletePopUpOpen}
            popUpEvents={popUpEvents}
            isDeleting={deleteArticle.isDeleting}
            handleDelete={this.handleDelete}
            handleEdit={handleEdit}
          />
        ) : null}
        <Container text style={{ marginTop: '7em' }}>
          { fetchedArticle && activeUser.username === fetchedArticle.author.username ? (
            <Grid divided="vertically">
              <Grid.Row columns={2}>
                <Grid.Column>
                  <Label attached="top" style={{ display: fetchedArticle && fetchedArticle.image ? 'none' : '' }}>
                    Include an image to your article.
                  </Label>
                </Grid.Column>
                <Grid.Column>
                  <input
                    style={{ display: fetchedArticle && fetchedArticle.image ? 'none' : '' }}
                    type="file"
                    name="image"
                    accept="image/*"
                    placeholder="Add image"
                    ref={imageInput}
                    onChange={onImageChange}
                  />
                </Grid.Column>
              </Grid.Row>
            </Grid>
            ) : null }
          <Header id="single-article-head" as="h1">{fetchedArticle && fetchedArticle.title}</Header>
          <p id="article-description">{fetchedArticle && fetchedArticle.description}</p>
          <Segment basic>
            <Loader size="huge" active={updateImage.isUpdating} />
            {fetchedArticle && fetchedArticle.image ? (
              <Image
                label={{
                  as: 'a',
                  color: 'teal',
                  corner: 'right',
                  icon: 'edit outline',
                  onClick: getInputFocus,
                }}
                src={(fetchedArticle.image)}
                className="article-image"
              />
            ) : null}
          </Segment>
          <div className="clearfix">
            <span className="article-span">
              {fetchedArticle && fetchedArticle.author.username}
            </span>
            {'| '}
            <span className="article-span">
              {Moment(fetchedArticle && fetchedArticle.created_at).format('dddd Do MMMM YYYY')}
            </span>
            <span className="article-span float-right">{rating}</span>
          </div>
          <span className="article-body">
            {fetchedArticle && renderHtml(fetchedArticle.body)}
          </span>

        </Container>
      </Segment>
    );
  }
}

const mapStateToProps = ({ articles, deleteArticle, updateImage }) => ({
  articles,
  deleteArticle,
  updateImage,
});
const mapDispatchToProps = dispatch => bindActionCreators({
  deleteArticleAction: deleteUserArticle,
}, dispatch);
ArticleComponent.propTypes = {
  article: PropTypes.shape({}).isRequired,
  articles: PropTypes.shape({}).isRequired,
  deleteArticle: PropTypes.shape({}).isRequired,
  isFetching: PropTypes.bool.isRequired,
  handleEdit: PropTypes.func.isRequired,
  getInputFocus: PropTypes.func.isRequired,
  imageInput: PropTypes.shape({}).isRequired,
  deleteArticleAction: PropTypes.func.isRequired,
  rating: PropTypes.shape({}).isRequired,
  onImageChange: PropTypes.func.isRequired,
  updateImage: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(ArticleComponent);
