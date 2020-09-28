import React from 'react';
import { observer } from 'mobx-react';

const Counter = observer((props) => {
  const { age, nickname, decrease, increase } = props.store;

  return (
    <div>
      <h1>{nickname}</h1>
      <h1>{age}</h1>
      <button data-test="decrease" onClick={decrease}>decrement</button>
      <button data-test="increase" onClick={increase}>increase</button>
    </div>
  );
}, { name: 'counter' });

export default Counter;
