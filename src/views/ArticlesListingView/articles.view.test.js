import React from 'react';
import { shallow } from 'enzyme';
import ArticlesView from './index';
import PopularComponent from '../../components/Popular';
import ArticlesListing from '../../components/ArticlesListing';
import { Pagination } from 'semantic-ui-react';


it('should render articles listing page', () => {
  const wrapper = shallow(<ArticlesView />);
  expect(wrapper.length).toBe(1);
  expect(wrapper.find(<PopularComponent isFetching={false} />)).toBeDefined();
  expect(wrapper.find(<ArticlesListing isFetching={false} articles={[]} />)).toBeDefined();
  expect(wrapper.find(<Pagination totalPages={10} />)).toBeDefined();
});
it('it should match snapshot', () => {
  const wrapper = shallow(<ArticlesView />);
  expect(wrapper).toMatchSnapshot();
});
