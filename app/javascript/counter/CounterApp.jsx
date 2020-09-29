import React from 'react';
import { when, autorun } from 'mobx';

import Counter from './Counter';
import counterStore from './CounterStore';

when(
  () => counterStore.age > 26,
  () => { alert('age is more that 26'); },
);

autorun(() => {
  alert(`age is ${counterStore.age}`);
}, {
  name: 'Update',
  delay: 1000,
});

const CounterApp = () => (
  <Counter store={counterStore} />
);

export default CounterApp;
