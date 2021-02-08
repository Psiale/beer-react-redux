import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import { shallow, configure } from 'enzyme';
import Filter from '../../components/Filter';

configure({ adapter: new Adapter() });

const component = <Filter handleFilterChange={() => {}} />;
it('renders correctly', () => {
  const tree = renderer.create(component).toJSON();
  expect(tree).toMatchSnapshot();
});

it('all the divs are properly render', () => {
  const wrapper = shallow(<Filter handleFilterChange={() => {}} />);
  const divs = wrapper.find('div');
  expect(divs).toHaveLength(1);
});

it('all the select are properly render', () => {
  const wrapper = shallow(<Filter handleFilterChange={() => {}} />);
  const divs = wrapper.find('select');
  expect(divs).toHaveLength(1);
});
