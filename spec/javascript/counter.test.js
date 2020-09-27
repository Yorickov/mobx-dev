import React from 'react';
import Counter from '../../app/javascript/components/Counter';
import counterStore from '../../app/javascript/stores/counterStore';

it('Counter', () => {
  const wrapper = mount(<Counter store={counterStore} />);
  expect(wrapper.render()).toMatchSnapshot();

  const dec = wrapper.find('button[data-test="decrease"]');
  const inc = wrapper.find('button[data-test="increase"]');

  dec.simulate('click');
  inc.simulate('click');
  inc.simulate('click');

  expect(wrapper.render()).toMatchSnapshot();
});
