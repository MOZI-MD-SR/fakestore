import React from 'react';

const TablaFejlec = ({ oszlopok }) => {
  return (
    <thead>
      <tr>
        {oszlopok.map((oszlop, index) => (
          <th key={index}>{oszlop}</th>
        ))}
      </tr>
    </thead>
  );
};

export default TablaFejlec;
