import {
 shallow, render, mount, configure,
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

// Automatically import all reusable imports into all test files
global.shallow = shallow;
global.render = render;
global.mount = mount;
