import React from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleDown} from '@fortawesome/free-solid-svg-icons';

const Today = () => (
  <div className="c-today container">
    <h2>Hoy en mallplaza</h2>
    <FontAwesomeIcon icon={faAngleDown} className="icon" />
  </div>
);

export default Today;
