import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import <%= upCaseName %> from './<%= upCaseName %>';

test('<%= upCaseName %> snapshot test', () => {

  const component = shallow(<<%= upCaseName %> />);
  const tree = shallowToJson(component);

  expect(tree).toMatchSnapshot();

});
