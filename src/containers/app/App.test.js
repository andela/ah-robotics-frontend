import React from 'react';
<<<<<<< HEAD:src/App.test.js
import { shallow } from 'enzyme';
import App from './App';
=======
import ReactDOM from 'react-dom';
import App from '../../App';
>>>>>>> b5b287b... chore(redux): Redux setup:src/containers/app/App.test.js

describe('RootComponent', () => {
  it('app should render without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.length).toBe(1);
  });
});
