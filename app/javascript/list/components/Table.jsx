import React from 'react';
import { observer } from 'mobx-react';
import Row from './Row';

const Table = observer((props) => {
  const { filteredDevs, totalSum, topPerformer } = props.store;

  return (
    <table>
      <thead>
        <tr>
          <td>Name:</td>
          <td>Points:</td>
        </tr>
      </thead>
      <tbody>
        {filteredDevs.map((dev, i) => <Row key={i} data={dev} />)}
      </tbody>
      <tfoot>
        <tr>
          <td>Team Points:</td>
          <td>{totalSum}</td>
        </tr>
        <tr>
          <td>Top Performer:</td>
          <td>{topPerformer ? topPerformer.name : ''}</td>
        </tr>
      </tfoot>
    </table>
  );
});

export default Table;
