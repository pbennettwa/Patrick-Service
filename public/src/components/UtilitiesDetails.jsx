/* eslint-disable react/prop-types */
import React from 'react';
import ListHelper from './ListHelper';
import '../../dist/styles.css';

const UtilitiesDetails = ({ listing }) => (
  <div className="utilities-details-container">
    <div>
      <div className="type">Utility</div>
      <ul>
        {typeof listing === 'object' && Object.keys(listing.utility).map((key) => (
          <ListHelper key={key} entry={key} value={listing.utility[key]} />
        ))}
      </ul>
    </div>
    <div>
      <div className="type">Green energy</div>
      <ul>
        {typeof listing === 'object' && Object.keys(listing.greenEnergy).map((key) => (
          <ListHelper key={key} entry={key} value={listing.greenEnergy[key]} />
        ))}
      </ul>
    </div>
  </div>
);

export default UtilitiesDetails;
