import React from 'react';
import Table from './Table';
import Controls from './Controls';
import tableStore from '../stores/TableStore';

const List = () => (
  <div>
    <h1>Sprint Board:</h1>
    <Controls store={tableStore} />
    <Table store={tableStore} />
  </div>
);

export default List;
