import React from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleDown} from '@fortawesome/free-solid-svg-icons';

const Today = props => (
  <div className="c-today container" onClick={props.toggleToday}>
    <h2>Hoy en mallplaza</h2>
    <FontAwesomeIcon icon={faAngleDown} className="icon" />
  </div>
);

export default Today;
