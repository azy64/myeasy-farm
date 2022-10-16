/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/display-name */
import React from 'react';

const withPartFields = (Mycomponent, callback) => (props) => {
  const data = callback();
  return (<Mycomponent items={data.items} soilItems={data.soilFields.items} {...props} />);
};

export default withPartFields;
