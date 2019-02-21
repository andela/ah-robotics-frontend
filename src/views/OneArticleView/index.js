import React, { Component } from 'react';
import OneArticle from '../../components/MockArticle';
import RatingsView from '../RatingsView';

class OneArticleView extends Component {
    state = { }

    render() {
        return (
          <div>
            <OneArticle />
            <RatingsView />
          </div>
        );
    }
}

export default OneArticleView;
