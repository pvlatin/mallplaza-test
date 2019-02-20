import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faClock} from '@fortawesome/free-solid-svg-icons';

const OpenAt = props => (
  <div className="c-open-at py-5 d-flex justify-content-center align-items-center my-2">
    <FontAwesomeIcon icon={faClock} className="mr-2 icon" />
    <div className="c-open-at__hours justify-content-center">
      <span className="c-open-at__hours--open">ABIERTO</span>
      <span className="c-open-at__hours--at">10:00 - 21:30</span>
    </div>
  </div>
);

export default OpenAt;
