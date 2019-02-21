import React from 'react';
import RatingComponent from './index';

const prop = {
    ratings: {
        userRating: {},
        error: {},
        averageRating: 0,
        isLoading: false,
        isSuccess: false,
        isUpdated: false,
        isError: false,
        rating: {
            message: {},
            data: {
                article: 'this-is-africa',
                average_rating: 2.5,
                user_rating: 4,
            },
        },
    },
};
const square = 0;
const handleRate = () => {};

it('app should match the snapshot', () => {
    const wrapper = shallow(
      <RatingComponent prop={prop} square={square} handleRate={handleRate} />,
);
    expect(wrapper).toMatchSnapshot();
    });
