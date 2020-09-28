import React from 'react';
import CounterApp from '../../app/javascript/counter/CounterApp';

it('Counter', () => {
  const wrapper = mount(<CounterApp />);
  expect(wrapper.render()).toMatchSnapshot();

  const dec = wrapper.find('button[data-test="decrease"]');
  const inc = wrapper.find('button[data-test="increase"]');

  dec.simulate('click');
  inc.simulate('click');
  inc.simulate('click');

  expect(wrapper.render()).toMatchSnapshot();
});
