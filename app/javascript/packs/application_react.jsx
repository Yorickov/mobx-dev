import React from 'react';
import ReactDOM from 'react-dom';
import CounterApp from '../counter/CounterApp';
import List from '../list/components/List';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <div className="container">
      <div className="row">
        <div className="col">
          <CounterApp />
        </div>
        <div className="col">
          <List />
        </div>
      </div>
    </div>,
    document.body.appendChild(document.createElement('div')),
  );
});
