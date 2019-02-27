import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import '../../components/Login/login.scss';
import { selectedRating } from '../../redux/actions/RatingsActions/actions';
import RatingComponent from '../../components/Ratings';

class RatingsView extends Component {
  state = { }

  handleRate = (e, { rating }) => {
    e.preventDefault();
    const { selectedRating: ratingAction } = this.props;
    const { match } = this.props;
    this.setState({ rating },
      () => {
        const data = {
          ...this.state,
          match,
        };
        ratingAction(data);
      });
  };

  render() {
    return (
      <RatingComponent prop={this.props} handleRate={this.handleRate} />
 );
  }
}


// set proptypes validation
RatingsView.propTypes = {
  selectedRating: PropTypes.func.isRequired,
  match: PropTypes.shape.isRequired,
};

// map the ratings state to props
const mapStateToProps = ({
    ratings, articles,
  }) => ({
  ratings, articles,
});

const mapDispatchToProps = dispatch => bindActionCreators({
selectedRating,
}, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RatingsView));
