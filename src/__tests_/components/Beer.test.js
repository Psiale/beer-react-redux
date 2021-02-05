import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import { shallow, configure } from 'enzyme';
import Beer from '../../components/Beer';

configure({ adapter: new Adapter() });

const beer = {
  id: 1,
  name: 'Beer',
  tagline: 'Supe',
  abv: 18,
  imageUrl: 'Something',
};

const component = <Beer beer={beer} handleOnClick={() => {}} category="Pale Ale" />;
it('renders correctly', () => {
  const tree = renderer.create(component).toJSON();
  expect(tree).toMatchSnapshot();
});

it('finds the category text', () => {
  const wrapper = shallow(<Beer beer={beer} handleOnClick={() => {}} category="Pale Ale" />);
  const divs = wrapper.find('div');
  expect(divs).toHaveLength(5);
});
