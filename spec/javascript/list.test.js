import React from 'react';
import List from '../../app/javascript/list/components/List';

it('List', () => {
  const wrapper = mount(<List />);
  expect(wrapper.render()).toMatchSnapshot();

  const newTextInput = wrapper.find('.controls input');
  newTextInput.simulate('change', { target: { value: 'J' } });
  expect(wrapper.render()).toMatchSnapshot();

  const clearButton = wrapper.find('.controls button').first();
  clearButton.simulate('click');
  expect(wrapper.render()).toMatchSnapshot();
});
