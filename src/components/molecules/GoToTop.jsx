import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleUp} from '@fortawesome/free-solid-svg-icons';

const GoToTop = props => (
  <div className="container c-gototop">
    <span>volver arriba</span>
    <FontAwesomeIcon icon={faAngleUp} className="c-gototop__icon"/>
  </div>
);

export default GoToTop;
