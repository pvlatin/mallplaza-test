import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';

const OpenAt = props => (
  <div className="c-open-at">
    <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
    <div className="c-open-at__hours">
      <span className="c-open-at__hours--open">ABIERTO</span>
      <span className="c-open-at__hours--at">10:00 - 21:30</span>
    </div>
  </div>
);

export default OpenAt;
