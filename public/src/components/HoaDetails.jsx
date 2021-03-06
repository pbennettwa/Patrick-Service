/* eslint-disable react/prop-types */
import React from 'react';
import ListHelper from './ListHelper';
import '../../dist/styles.css';

const HoaDetails = ({ listing }) => (
  <div>
    <div>
      <div className="type">Other financial information</div>
      <ul>
        {typeof listing === 'object' && Object.keys(listing.otherFinancialInformation).map((key) => (
          <ListHelper key={key} entry={key} value={listing.otherFinancialInformation[key]} />
        ))}
      </ul>
    </div>
  </div>
);

export default HoaDetails;
