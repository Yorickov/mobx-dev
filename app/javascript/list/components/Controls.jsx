import React from 'react';
import { observer } from 'mobx-react';

const Controls = observer((props) => {
  const { addDeveloper, clearList, filter, updateFilter } = props.store;

  const handleDeveloper = () => {
    const name = prompt('The name:');
    const points = parseInt(prompt('The story points:'), 10);
    addDeveloper({ name, points });
  };

  const filterDevs = ({ target: { value } }) => updateFilter(value);

  return (
    <div className="controls">
      <button onClick={clearList}>Clear table</button>
      <button onClick={handleDeveloper}>Add record</button>
      <input type="text" value={filter} onChange={filterDevs}/>
    </div>
  );
});

export default Controls;
