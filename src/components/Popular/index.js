import React from 'react';
import { Segment, Image } from 'semantic-ui-react';
import './popular.scss';
import PropTypes from 'prop-types';
import haven from './Authors-sketch.png';

const PopularComponent = ({ isFetching }) => (
  <Segment basic loading={isFetching} class="popular-container">
    <Image src={haven} />
    <div className="centered">
      <h1>AUTHORS HAVEN</h1>
    </div>
  </Segment>
);
PopularComponent.propTypes = {
  isFetching: PropTypes.bool.isRequired,
};
export default PopularComponent;
