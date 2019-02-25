import React from 'react';

const Hamburger = props => {
  let hamburgerClasses = 'wrapper c-hamburger';
  if (props.show) {
    hamburgerClasses = 'wrapper c-hamburger hamburgerPressed';
  }
  return (
    <div className={hamburgerClasses} onClick={props.menuToggler}>
      <span>&nbsp;</span>
    </div>
  );
};

export default Hamburger;
