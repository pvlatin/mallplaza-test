import React, {useState} from 'react';
import Today from '../molecules/Today';
import News from '../organisms/News';
import Stores from '../organisms/Stores';
import Activities from '../organisms/Activities';
import OpenAt from '../molecules/OpenAt';
import TodayToggled from '../organisms/TodayToggled';

const Landing = props => {
  const [state, setState] = useState({
    todayIsOpen: false
  });

  const todayToggle = () => {
    setState(prevState => ({
      todayIsOpen: !prevState.todayIsOpen
    }));
  };

  const content = (
    <>
      <News />
      <TodayToggled show={state.todayIsOpen} />
      <Today toggleToday={todayToggle} show={state.todayIsOpen}/>
      <Stores />
      <Activities />
      <OpenAt />
    </>
  );
  return content;
};

export default Landing;
