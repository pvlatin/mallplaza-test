import React, {Component} from 'react';

const Backdrop = props => {
  let menuClasses = ['backdrop'];
  if (props.show) {
    menuClasses = 'backdrop showBackdrop';
  }
  return <div className={menuClasses} onClick={props.backdropHandler} />;
};

export default Backdrop;
