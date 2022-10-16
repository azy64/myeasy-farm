import React from 'react';
import PropTypes from 'prop-types';
import MapEnhanced from './Map';

function MapDetail({ close, target }) {
  console.log('id', target);
  return (
    <div className="window">
      <div className="view">
        <div className="text-right">
          <span
            role="button"
            onClick={() => close(false)}
            onKeyUp={() => close(false)}
            className="close text-center"
            tabIndex="0"
          >
            X
          </span>
        </div>
        <MapEnhanced target={target} />
      </div>
    </div>

  );
}

MapDetail.propTypes = {
  close: PropTypes.func.isRequired,
  target: PropTypes.string.isRequired,
};
export default MapDetail;
