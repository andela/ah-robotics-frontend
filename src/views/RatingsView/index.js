import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import '../../components/Login/login.scss';
import { selectedRating } from '../../redux/actions/RatingsActions/actions';
import RatingComponent from '../../components/Ratings';

class RatingsView extends Component {
  state = { }

  square = { width: 175, height: 175 }


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
    return (
      <RatingComponent prop={this.props} square={this.square} handleRate={this.handleRate} />
 );
  }
}


// set proptypes validation
RatingsView.propTypes = {
  selectedRating: PropTypes.func.isRequired,
};

// map the ratings state to props
const mapStateToProps = ({ ratings }) => ({
  ratings,
});

const mapDispatchToProps = dispatch => bindActionCreators({
selectedRating,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RatingsView);
