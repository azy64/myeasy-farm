/* eslint-disable react/prop-types */
import React from 'react';
import {
  MapContainer, TileLayer, Marker, Popup, Polygon,
} from 'react-leaflet';
import withPartFields from '../hoc/withPartFields';
import fields from '../data/1-partfields.json';
import soilFields from '../data/1-soilmaps.json';

function Map(props) {
  const { items, target, soilItems } = props;
  const soilItem = soilItems.filter((soil) => soil.id === target)[0];
  const { center } = items.filter((item) => item.id === soilItem.partfield_id)[0];
  const { features } = soilItem.mapdata;
  return (
    <div>
      <MapContainer
        center={center}
        zoom={23}
        scrollWheelZoom
        style={{ width: '100%', height: '70vh' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {
                features.map((feature) => (
                  <div key={feature.properties.id}>
                    <Polygon
                      pathOptions={{ color: `${feature.properties.color}` }}
                      positions={feature.geometry.coordinates}
                    />
                    <Marker position={center}>
                      <Popup>
                        <h4>{soilItem.name}</h4>
                        <br />
                      </Popup>
                    </Marker>
                  </div>
                ))
            }
      </MapContainer>
    </div>
  );
}
const MapEnhanced = withPartFields(Map, () => ({ items: fields.items, soilFields }));
export default MapEnhanced;
