/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import {
  MapContainer, TileLayer, Marker, Popup, Polygon,
} from 'react-leaflet';
import fields from '../data/1-partfields.json';
import withPartFields from '../hoc/withPartFields';
import soilFields from '../data/1-soilmaps.json';
import MapDetail from './MapDetail';

function MefMap(props) {
  const { items, soilItems } = props;
  const [mapVisibility, setMapVisibility] = useState(false);
  const [idToDisplay, setIdToDisplay] = useState('');
  const handleVisibility = (e) => {
    e.preventDefault();
    setIdToDisplay(e.target.id);
    setMapVisibility(true);
  };
  return (
    <div>
      {mapVisibility ? <MapDetail close={setMapVisibility} target={idToDisplay} /> : ''}
      <MapContainer
        center={items[0].center}
        zoom={13}
        scrollWheelZoom
        style={{ width: '100%', height: '100vh' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {
            items.map((element) => {
              const soilById = soilItems.filter((soil) => soil.partfield_id === element.id);
              return (
                <div key={element.id}>
                  <Polygon
                    pathOptions={{ color: `#${element.color_hex}` }}
                    positions={element.boundaries.coordinates}
                  />
                  <Marker position={element.center}>
                    <Popup>
                      <h4>{element.designator}</h4>
                      Available Maps:
                      {' '}
                      <br />
                      {
                        soilById.map((soil) => (
                          <div key={soil.id}>
                            <a href="/" id={soil.id} onClick={handleVisibility}>
                              {' '}
                              { soilById.length > 1 ? ',' : ''}
                              {' '}
                              {soil.name}
                            </a>
                          </div>
                        ))
                     }
                    </Popup>
                  </Marker>
                </div>
              );
            })
        }
      </MapContainer>
    </div>
  );
}

const EnhancedComponent = withPartFields(
  MefMap, () => ({ items: fields.items, soilFields }),
);

export default EnhancedComponent;
