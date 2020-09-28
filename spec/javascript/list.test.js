import React from 'react';
import List from '../../app/javascript/list/components/List';

it('List', () => {
  const wrapper = mount(<List />);
  expect(wrapper.render()).toMatchSnapshot();
});
