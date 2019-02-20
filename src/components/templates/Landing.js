import React from 'react';
import Today from '../molecules/Today';
import News from '../organisms/News';
import Stores from '../organisms/Stores';
import Activities from '../organisms/Activities';
import OpenAt from '../molecules/OpenAt';

const Landing = () => (
  <React.Fragment>
    <Today />
    <News />
    <Stores />
    <Activities />
    <OpenAt />
  </React.Fragment>
);

export default Landing;
