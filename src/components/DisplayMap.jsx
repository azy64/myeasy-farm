import React from 'react';
import MefMap from './MefMap';

function DisplayMap() {
  return (
    <div style={{
      width: '80%', height: '70vh', margin: 'auto', border: '8px solid #f7931e', overflow: 'hidden',
    }}
    >
      <MefMap />
    </div>
  );
}

export default DisplayMap;
