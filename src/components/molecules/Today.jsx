import React from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleDown, faAngleUp} from '@fortawesome/free-solid-svg-icons';

const Today = props => {
  let currentIcon;
  if (props.toggleToday) {
    currentIcon = faAngleDown;
  } else {
    currentIcon = faAngleUp;
  }
  return (
    <div className="c-today container" onClick={props.toggleToday}>
      <h2>Hoy en mallplaza</h2>
      <FontAwesomeIcon icon={currentIcon} className="icon" />
    </div>
  );
};

export default Today;
