import React from 'react';
import Counter from './Counter';
import counterStore from './CounterStore';

const CounterApp = () => (
  <Counter store={counterStore} />
);

export default CounterApp;
