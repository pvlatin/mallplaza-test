import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faClock} from '@fortawesome/free-solid-svg-icons';

const OpenAt = props => (
  <div className="c-open-at py-5">
    <FontAwesomeIcon icon={faClock} className="icon" />
    <div className="c-open-at__hours">
      <span className="c-open-at__hours--open">ABIERTO</span>
      <span className="c-open-at__hours--at">10:00 - 21:30</span>
    </div>
  </div>
);

export default OpenAt;
