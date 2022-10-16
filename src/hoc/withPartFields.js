/* eslint-disable react/display-name */
import React from 'react';

const withPartFields = (Mycomponent, callback) => () => {
  const data = callback();
  return (<Mycomponent items={data.items} soilItems={data.soilFields.items} />);
};

export default withPartFields;
