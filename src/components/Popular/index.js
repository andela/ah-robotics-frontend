import React from 'react';
import { Segment, Header, Container } from 'semantic-ui-react';
import './popular.scss';


const PopularComponent = () => (

  <Container>
    <Segment basic id="my-segment" />
    <div id="authors-div">
      <Header id="authors-header" as="h1">AUTHORS HAVEN</Header>
      <p id="authors-text">A Social platform for the creative at heart</p>
    </div>
  </Container>
);

export default PopularComponent;
