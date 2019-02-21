import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
 Rating, Loader, Header, Segment,
} from 'semantic-ui-react';
import { selectedRating } from '../../redux/actions/RatingsActions/actions';

class RatingsView extends Component {
  state = { }

  handleRate = (e, { rating }) => {
    e.preventDefault();
    const { selectedRating: ratingAction } = this.props;
    this.setState({ rating },
      () => {
        const data = {
          ...this.state,
        };
        ratingAction(data);
      });
  };

  render() {
    const { ratings } = this.props;
    const square = { width: 175, height: 175 };
    return (
      <div>
        <Segment circular style={square}>
          <Header as="h2">
              Rating!
            <Header.Subheader>
              {ratings.isLoading === true && <Loader active inline />}
              {ratings.isUpdated
              ? (ratings.isLoading === false
                && JSON.stringify(ratings.rating.data.average_rating)) : null}
            </Header.Subheader>
          </Header>
          <Rating icon="star" maxRating={5} onRate={this.handleRate} />
        </Segment>
      </div>
    );
  }
}


// set proptypes validation
RatingsView.propTypes = {
  selectedRating: PropTypes.func.isRequired,
  ratings: PropTypes.shape().isRequired,
};

// map the ratings state to props
const mapStateToProps = ({ ratings }) => ({
  ratings,
});

const mapDispatchToProps = dispatch => bindActionCreators({
selectedRating,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RatingsView);
