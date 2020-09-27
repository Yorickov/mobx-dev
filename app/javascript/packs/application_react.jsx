import React from 'react';
import ReactDOM from 'react-dom';
import counterStore from '../stores/CounterStore';
import Counter from '../components/Counter';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <div className="container">
      <Counter store={counterStore}/>
    </div>,
    document.body.appendChild(document.createElement('div')),
  );
});
