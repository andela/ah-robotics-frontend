import React from 'react';
import { Grid, Segment, img,
} from 'semantic-ui-react';
import './popular.scss';

const PopularComponent = () => (
  <Segment className="banner-segment" placeholder style={{ maxHeight: '29rem', borderColor: 'rgba(218, 220, 222, 0.15)' }}>
    <Grid columns={2} stackable textAlign="center">
      <Grid.Row verticalAlign="middle">
        <Grid.Column className="banner-main">
          <img  src="https://source.unsplash.com/random" className="ui fluid image" size="medium" centred />
        </Grid.Column>

        <Grid.Column className="banner-right">
          <Grid>
            <Grid.Row>
              <Grid.Column width={8}>
                <img src="https://source.unsplash.com/random" className="ui fluid image" />
              </Grid.Column>
              <Grid.Column width={8}>
                <img src="https://source.unsplash.com/random" className="ui fluid image" />
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={8}>
                <img src="https://source.unsplash.com/random" className="ui fluid image" />
              </Grid.Column>
              <Grid.Column width={8}>
                <img src="https://source.unsplash.com/random" className="ui fluid image" />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
);

export default PopularComponent;
