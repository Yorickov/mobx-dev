import React from 'react';

const Row = ({ data: { name, points } }) => (
  <tr>
    <td>{name}</td>
    <td>{points}</td>
  </tr>
);

export default Row;
